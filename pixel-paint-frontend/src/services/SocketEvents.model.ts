/** What the client sends, Server Receives */
enum EventsSocketReceives {
    PING = 'ping',
    CREATE_ROOM = 'create_room',
    JOIN_ROOM = 'join_room',
    ON_DISCONNECT = 'disconnect_game',
    GENERATE_PRESET = 'generate_preset',
    GENERATE_FIRST_PRESET = 'generate_first_preset',
    SELECT_TILE = 'select_tile',
    CHANGE_COLOR = 'change_color',
    ON_CLEAR_CLICK = 'on_clear_click'
}

/** What the server sends, Client receives */
enum EventsSocketEmits {
    PONG = 'pong',
    ERROR = 'error',
    CONNECTED = 'connected',
    ROOM_CREATED = 'room_created',
    ROOM_JOINED = 'room_joined',
    PLAYER_DISCONNECTED = 'disconnected_game',
    PRESET_GENERATED = 'preset_generated',
    FIRST_PRESET_GENERATED = 'first_preset_generated',
    TILE_SELECTED = 'tile_selected',
    COLOR_CHANGED = 'color_changed',
    CLEAR_CLICKED = 'clear_clicked'
}

export const SocketEvents = { ...EventsSocketReceives, ...EventsSocketEmits }
