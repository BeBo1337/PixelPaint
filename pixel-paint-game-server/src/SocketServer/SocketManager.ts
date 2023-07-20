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
      [SocketEvents.GENERATE_PRESET]: this._generatePreset.bind(this),
      [SocketEvents.SELECT_TILE]: this._selectTile.bind(this),
      [SocketEvents.GENERATE_FIRST_PRESET]:
        this._generateFirstPreset.bind(this),
      [SocketEvents.ON_CLEAR_CLICK]: this._onClearClick.bind(this),
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

  private _generateFirstPreset(
    roomId: string,
    player: string,
    mapData: MapData,
  ) {
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

    const preset: PuzzlePayload = generateTiles(mapData, session.usedPresets);
    session.addUsedPreset(preset.name);
    this._io.sockets
      .in(roomId)
      .emit(SocketEvents.FIRST_PRESET_GENERATED, preset);
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
    session.increaseScore();
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

  private _sendError(where?: string, message?: string, error?: unknown) {
    this._socket.emit(
      SocketEvents.ERROR,
      where,
      message ?? `There was an issue`,
      error,
    );
  }
}
