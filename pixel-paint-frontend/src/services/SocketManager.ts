import io, { Socket } from 'socket.io-client'
import { SocketEvents } from './SocketEvents.model'
import EventsManager from './EventsManager'
import { MapData } from '../models'
import { PuzzlePayload } from '../payloads/PuzzlePayload'
import { CreateRoomPayload } from '../payloads/CreateRoomPayload.model'
import { TileSelectedPayload } from '../payloads/TileSelectedPayload.model'
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

    public static get instance() {
        if (!SocketManager._instance) {
            SocketManager._instance = new SocketManager()
        }
        return SocketManager._instance
    }

    public static newInstance() {
        SocketManager._instance = new SocketManager()
        return SocketManager._instance
    }

    private _socket: Socket
    private _eventsManager: EventsManager
    constructor() {
        this._eventsManager = EventsManager.instance
        const emitsHandler = {
            [SocketEvents.PING]: this._ping.bind(this),
            [SocketEvents.CREATE_ROOM]: this._createRoom.bind(this),
            [SocketEvents.JOIN_ROOM]: this._joinRoom.bind(this),
            [SocketEvents.ON_DISCONNECT]: this._onDisconnect.bind(this),
            [SocketEvents.GENERATE_PRESET]: this._generatePreset.bind(this),
            [SocketEvents.GENERATE_FIRST_PRESET]:
                this._generateFirstPreset.bind(this),
            [SocketEvents.SELECT_TILE]: this._selectTile.bind(this),
            [SocketEvents.CHANGE_COLOR]: this._changeColor.bind(this),
            [SocketEvents.ON_CLEAR_CLICK]: this._onClear.bind(this)
        }

        const onsHandler = {
            [SocketEvents.PONG]: this._pong.bind(this),
            [SocketEvents.ERROR]: this._onError.bind(this),
            [SocketEvents.ROOM_CREATED]: this._roomCreated.bind(this),
            [SocketEvents.ROOM_JOINED]: this._roomJoined.bind(this),
            [SocketEvents.PLAYER_DISCONNECTED]:
                this._playerDisconnected.bind(this),
            [SocketEvents.FIRST_PRESET_GENERATED]:
                this._firstPresetGenerated.bind(this),
            [SocketEvents.PRESET_GENERATED]: this._presetGenerated.bind(this),
            [SocketEvents.TILE_SELECTED]: this._tileSeleceted.bind(this),
            [SocketEvents.COLOR_CHANGED]: this._colorChanged.bind(this),
            [SocketEvents.CLEAR_CLICKED]: this._clearClicked.bind(this)
        }

        Object.entries(emitsHandler).forEach(([key, value]) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._eventsManager.on(key, 'socket-manager', value)
        )

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
        const { player, gameMode } = data
        this._playerId = player
        this._socket.emit(SocketEvents.CREATE_ROOM, player, gameMode)
    }

    private _joinRoom() {
        this._socket.emit(SocketEvents.JOIN_ROOM, {})
    }

    private _onDisconnect() {
        this._socket.emit(SocketEvents.ON_DISCONNECT, {})
    }

    private _generateFirstPreset(data: MapData) {
        this._socket.emit(
            SocketEvents.GENERATE_FIRST_PRESET,
            this._roomId,
            this._playerId,
            data
        )
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

    private _changeColor() {
        this._socket.emit(SocketEvents.CHANGE_COLOR, {})
    }

    private _onClear() {
        this._socket.emit(SocketEvents.ON_CLEAR_CLICK, {})
    }
    //#endregion

    //#region ons
    private _pong() {
        this._eventsManager.trigger(SocketEvents.PONG, {})
    }

    private _onError(where?: string, message?: string, error?: unknown) {
        console.error(`[${where ?? 'Server Error'}] ${message};`, error)
    }

    private _roomCreated(room: CreateRoomPayload) {
        this._roomId = room.roomId
        this._eventsManager.trigger(SocketEvents.ROOM_CREATED, room)
    }

    private _roomJoined() {
        this._eventsManager.trigger(SocketEvents.ROOM_JOINED, {})
    }

    private _playerDisconnected() {
        this._eventsManager.trigger(SocketEvents.PLAYER_DISCONNECTED, {})
    }

    private _firstPresetGenerated(preset: PuzzlePayload) {
        this._eventsManager.trigger(SocketEvents.FIRST_PRESET_GENERATED, preset)
    }

    private _presetGenerated(preset: PuzzlePayload) {
        this._eventsManager.trigger(SocketEvents.PRESET_GENERATED, preset)
    }

    private _tileSeleceted(tilePayload: TileSelectedPayload) {
        this._eventsManager.trigger(SocketEvents.TILE_SELECTED, tilePayload)
    }

    private _colorChanged() {
        this._eventsManager.trigger(SocketEvents.COLOR_CHANGED, {})
    }

    private _clearClicked() {
        this._eventsManager.trigger(SocketEvents.CLEAR_CLICKED, {})
    }

    //#endregion
}

// @ts-ignore
window.SocketManager = SocketManager
