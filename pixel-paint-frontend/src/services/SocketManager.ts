import io, { Socket } from 'socket.io-client'
import { SocketEvents } from './SocketEvents.model'
import EventsManager from './EventsManager'
import { MapData } from '../models'
import { PuzzlePayload } from '../payloads/PuzzlePayload'
import { CreateRoomPayload } from '../payloads/CreateRoomPayload'
import { TileSelectedPayload } from '../payloads/TileSelectedPayload'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload'
import { GameOverPayload } from '../payloads/GameOverPayload'
const endpoint = 'localhost:3001'

export interface SocketError {
    where: string
    message: string
    error: any
}

export default class SocketManager {
    private static _instance: SocketManager
    private _roomId: string | null = null
    private _playerId: string | null = null
    private _isHost: boolean = false

    public static get instance() {
        if (!SocketManager._instance) {
            SocketManager._instance = new SocketManager()
        }
        return SocketManager._instance
    }

    public static newInstance() {
        if (SocketManager._instance) {
            SocketManager._instance.dispose()
        }

        SocketManager._instance = new SocketManager()
        return SocketManager._instance
    }

    public get roomId() {
        return this._roomId || null
    }
    public get playerId() {
        return this._playerId || null
    }
    public get isHost() {
        return this._isHost
    }

    private _unsubscribers: (() => void)[]
    private _socket: Socket
    private _eventsManager: EventsManager
    constructor() {
        this._eventsManager = EventsManager.instance
        this._unsubscribers = []

        const emitsHandler = {
            [SocketEvents.PING]: this._ping.bind(this),
            [SocketEvents.CREATE_ROOM]: this._createRoom.bind(this),
            [SocketEvents.JOIN_ROOM]: this._joinRoom.bind(this),
            [SocketEvents.START_GAME]: this._startGame.bind(this),
            [SocketEvents.ON_DISCONNECT]: this._onDisconnect.bind(this),
            [SocketEvents.GENERATE_PRESET]: this._generatePreset.bind(this),
            [SocketEvents.SELECT_TILE]: this._selectTile.bind(this),
            [SocketEvents.TIME]: this._onTime.bind(this),
            [SocketEvents.ON_CLEAR_CLICK]: this._onClear.bind(this),
            [SocketEvents.ON_GAME_LEAVE]: this._onGameLeave.bind(this),
            [SocketEvents.LEAVE_ROOM]: this._onRoomLeave.bind(this),
            [SocketEvents.GAMEOVER]: this._onGameOver.bind(this)
        }

        const onsHandler = {
            [SocketEvents.PONG]: this._pong.bind(this),
            [SocketEvents.ERROR]: this._onError.bind(this),
            [SocketEvents.ROOM_CREATED]: this._roomCreated.bind(this),
            [SocketEvents.ROOM_JOINED]: this._roomJoined.bind(this),
            [SocketEvents.GAME_STARTED]: this._gameStarted.bind(this),
            [SocketEvents.PRESET_GENERATED]: this._presetGenerated.bind(this),
            [SocketEvents.TILE_SELECTED]: this._tileSeleceted.bind(this),
            [SocketEvents.TIME_RET]: this._timeReturn.bind(this),
            [SocketEvents.CLEAR_CLICKED]: this._clearClicked.bind(this),
            [SocketEvents.DISBAND_GAME]: this._disbandGame.bind(this),
            [SocketEvents.PLAYER_LEFT_LOBBY]: this._onPlayerLeft.bind(this),
            [SocketEvents.GAMEOVER_RET]: this._gameOverReturn.bind(this)
        }

        for (const [key, value] of Object.entries(emitsHandler)) {
            this._eventsManager.on(key, 'socket-manager', value)
            this._unsubscribers.push(() =>
                this._eventsManager.off(key, 'socket-manager')
            )
        }

        this._socket = io(endpoint, {
            transports: ['websocket']
        })

        this._socket.on(SocketEvents.CONNECTED, this._connected.bind(this))

        Object.entries(onsHandler).forEach(([key, value]) =>
            this._socket.on(key, value)
        )
    }

    private _connected() {
        this._eventsManager.trigger(SocketEvents.CONNECTED, {})
    }

    //#region emits
    private _ping() {
        this._socket.emit(SocketEvents.PING, {})
    }

    private _createRoom(data: any) {
        const { playerId, gameMode } = data
        this._playerId = playerId
        this._socket.emit(SocketEvents.CREATE_ROOM, playerId, gameMode)
    }

    private _joinRoom(data: any) {
        const { roomId, playerId } = data
        this._playerId = playerId
        this._socket.emit(SocketEvents.JOIN_ROOM, roomId, playerId)
    }

    private _startGame(data: any) {
        const { roomId, playerId } = data
        this._socket.emit(SocketEvents.START_GAME, roomId, playerId)
    }

    private _onDisconnect() {
        this._socket.emit(SocketEvents.ON_DISCONNECT, {})
    }

    private _generatePreset(data: MapData) {
        this._socket.emit(
            SocketEvents.GENERATE_PRESET,
            this._roomId,
            this._playerId,
            data
        )
    }

    private _selectTile(tilePayload: TileSelectedPayload) {
        this._socket.emit(
            SocketEvents.SELECT_TILE,
            this._roomId,
            this._playerId,
            tilePayload
        )
    }

    private _onTime() {
        this._socket.emit(SocketEvents.TIME, this._roomId)
    }

    private _onClear(data: any) {
        const { picture } = data
        if (picture === false)
            this._socket.emit(
                SocketEvents.ON_CLEAR_CLICK,
                this._roomId,
                picture
            )
    }

    private _onGameLeave(playerId: string) {
        this._socket.emit(SocketEvents.ON_GAME_LEAVE, this._roomId, playerId)
    }

    private _onRoomLeave() {
        this._socket.emit(SocketEvents.LEAVE_ROOM, this._roomId, this._playerId)
    }

    private _onGameOver() {
        if (this._isHost) this._socket.emit(SocketEvents.GAMEOVER, this._roomId)
    }
    //#endregion

    //#region ons
    private _pong() {
        this._eventsManager.trigger(SocketEvents.PONG, {})
    }

    private _onError(where?: string, message?: string, error?: unknown) {
        console.error(`[${where ?? 'Server Error'}] ${message};`, error)
    }

    private _roomCreated(p: CreateRoomPayload) {
        this._roomId = p.roomId
        this._isHost = true
        this._eventsManager.trigger(SocketEvents.ROOM_CREATED, p)
    }

    private _roomJoined(p: JoinRoomPayload) {
        if (p) {
            this._roomId = p.roomId
            this._eventsManager.trigger(SocketEvents.ROOM_JOINED, p)
        }
    }

    private _gameStarted() {
        this._eventsManager.trigger(SocketEvents.GAME_STARTED, {})
    }

    private _presetGenerated(preset: PuzzlePayload) {
        this._eventsManager.trigger(SocketEvents.PRESET_GENERATED, preset)
    }

    private _tileSeleceted(p: TileSelectedPayload) {
        this._eventsManager.trigger(SocketEvents.TILE_SELECTED, p)
    }

    private _timeReturn(time: number) {
        this._eventsManager.trigger(SocketEvents.TIME_RET, time)
    }

    private _clearClicked() {
        this._eventsManager.trigger(SocketEvents.CLEAR_CLICKED, {})
    }

    private _disbandGame(playerID: string) {
        this._isHost = false
        this._playerId = null
        this._roomId = null
        this._eventsManager.trigger(SocketEvents.DISBAND_GAME, playerID)
    }

    private _onPlayerLeft(playerId: string) {
        this._eventsManager.trigger(SocketEvents.PLAYER_LEFT_LOBBY, playerId)
    }

    private _gameOverReturn(p: GameOverPayload) {
        this._eventsManager.trigger(SocketEvents.GAMEOVER_RET, p)
    }
    //#endregion

    public dispose() {
        for (const unsub of this._unsubscribers) {
            unsub()
        }
    }
}

// @ts-ignore
window.SocketManager = SocketManager
