import { Server, Socket } from "socket.io";
import { SocketEvents } from "./SocketEvents";
import uniqid from "uniqid";
import { generateTiles } from "../utils";
import {
  MapData,
  Tile,
  Preset,
  CreateRoomPayload,
  PuzzlePayload,
  TileSelectedPayload,
  JoinRoomPayload,
  GameOverPayload,
} from "../models";
import { GameSession } from "../models/GameSession.model";

export class SocketManager {
  private static _activeGames: Record<string, GameSession> = {};

  public static init(io: Server, socket: Socket) {
    return new SocketManager(io, socket);
  }

  private get rooms() {
    return this._io.sockets.adapter.rooms;
  }

  private _roomExists(roomId: string) {
    return this.rooms.get(roomId);
  }

  constructor(private _io: Server, private _socket: Socket) {
    const onHandlers: { [key: string]: any } = {
      [SocketEvents.PING]: this._onPing.bind(this),
      [SocketEvents.CREATE_ROOM]: this._createRoom.bind(this),
      [SocketEvents.JOIN_ROOM]: this._joinRoom.bind(this),
      [SocketEvents.START_GAME]: this._startGame.bind(this),
      [SocketEvents.GENERATE_PRESET]: this._generatePreset.bind(this),
      [SocketEvents.SELECT_TILE]: this._selectTile.bind(this),
      [SocketEvents.TIME]: this._onTime.bind(this),
      [SocketEvents.ON_CLEAR_CLICK]: this._onClearClick.bind(this),
      [SocketEvents.ON_GAME_LEAVE]: this._onGameLeave.bind(this),
      [SocketEvents.GAMEOVER]: this._onGameOver.bind(this),
    };

    Object.entries(onHandlers).forEach(([key, value]) =>
      this._socket.on(key, value),
    );

    // send socket connected to client
    this._socket.emit(SocketEvents.CONNECTED, { message: "connected" });
  }

  private _onPing() {
    this._socket.emit(SocketEvents.PONG, { message: "pong" });
  }

  private _createRoom(player: string, gameMode: number) {
    const room = uniqid("room-");

    SocketManager._activeGames[room] = new GameSession(
      room,
      [player],
      gameMode,
    );
    this._socket.join(room.toString());
    const payload: CreateRoomPayload = {
      roomId: room,
      gameMode: gameMode,
      host: player,
    };
    this._socket.emit(SocketEvents.ROOM_CREATED, payload);
  }

  private _joinRoom(roomId: string, playerId: string) {
    if (!roomId || !playerId) {
      this._sendError(
        "joinRoom",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "joinRoom",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }

    this._socket.join(roomId);
    const session = SocketManager._activeGames[roomId];

    session.addPlayer(playerId);
    const payload: JoinRoomPayload = {
      roomId: session.roomId,
      players: session.players,
      host: session.host,
    };
    this._io.sockets.in(roomId).emit(SocketEvents.ROOM_JOINED, payload);
  }

  private _startGame(roomId: string, playerId: string) {
    if (!roomId || !playerId) {
      this._sendError(
        "startGame",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "startGame",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }
    const session = SocketManager._activeGames[roomId];
    if (session.host !== playerId) {
      this._sendError(
        "startGame",
        "There was an issue, please try again",
        `host error`,
      );
      return;
    }
    this._io.sockets.in(roomId).emit(SocketEvents.GAME_STARTED, {});
  }

  private _generatePreset(roomId: string, player: string, mapData: MapData) {
    if (!roomId || !player || !mapData) {
      this._sendError(
        "generatePreset",
        "There was an issue, please try again",
        "Missing Variables",
      );

      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "generatePreset",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }

    const session = SocketManager._activeGames[roomId];

    if (player !== session.host) {
      return;
    }

    session.incrementScore();
    session.addTime(mapData.difficulty);
    const preset: PuzzlePayload = generateTiles(mapData, session.usedPresets);
    SocketManager._activeGames[roomId].usedPresets.push(preset.name);
    this._io.sockets.in(roomId).emit(SocketEvents.PRESET_GENERATED, preset);
  }

  private _selectTile(
    roomId: string,
    playerId: string,
    tilePayload: TileSelectedPayload,
  ) {
    if (!roomId || !playerId || !tilePayload) {
      this._sendError(
        "selectTile",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "selectTile",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }

    this._io.sockets.in(roomId).emit(SocketEvents.TILE_SELECTED, tilePayload);
  }

  private _onTime(roomId: string) {
    if (!roomId) {
      this._sendError(
        "onTime",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "onTime",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }
    const session = SocketManager._activeGames[roomId];
    session.decrementTime();
    this._io.sockets.in(roomId).emit(SocketEvents.TIME_RET, session.timeLeft);
  }

  private _onClearClick(roomId: string, picture: boolean) {
    if (!roomId) {
      this._sendError(
        "onClearClick",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "onClearClick",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }

    this._io.sockets.in(roomId).emit(SocketEvents.CLEAR_CLICKED, picture);
  }

  private _onGameLeave(roomId: string, playerId: string) {
    if (!roomId || !playerId) {
      this._sendError(
        "onGameLeave",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "onGameLeave",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }
    this._io.sockets.in(roomId).emit(SocketEvents.DISBAND_GAME, playerId);
    delete SocketManager._activeGames[roomId];
    console.log("room removed");
  }

  private _onGameOver(roomId: string) {
    if (!roomId) {
      this._sendError(
        "onGameOver",
        "There was an issue, please try again",
        "Missing Variables",
      );
      return;
    }
    if (!this._roomExists(roomId)) {
      this._sendError(
        "onGameOver",
        "There was an issue, please try again",
        `This room ${roomId} does not exist.`,
      );
      return;
    }
    const session = SocketManager._activeGames[roomId];
    const payload: GameOverPayload = {
      players: session.players,
      host: session.host,
      gameMode: session.gameMode,
      score: session.score,
    };
    this._io.sockets.in(roomId).emit(SocketEvents.GAMEOVER_RET, payload);
  }

  private _sendError(where?: string, message?: string, error?: unknown) {
    this._socket.emit(
      SocketEvents.ERROR,
      where,
      message ?? `There was an issue`,
      error,
    );
  }
}
