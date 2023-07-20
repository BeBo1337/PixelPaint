/** What the client sends, Server Receives */
enum EventsSocketReceives {
  PING = "ping",
  CREATE_ROOM = "create_room",
  JOIN_ROOM = "join_room",
  START_GAME = "start_game",
  ON_DISCONNECT = "disconnect_game",
  GENERATE_PRESET = "generate_preset",
  GENERATE_FIRST_PRESET = "generate_first_preset",
  SELECT_TILE = "select_tile",
  TIME = "time",
  ON_CLEAR_CLICK = "on_clear_click",
  ON_GAME_LEAVE = "on_game_leave",
}

/** What the server sends, Client receives */
enum EventsSocketEmits {
  PONG = "pong",
  ERROR = "error",
  CONNECTED = "connected",
  ROOM_CREATED = "room_created",
  ROOM_JOINED = "room_joined",
  GAME_STARTED = "game_started",
  PRESET_GENERATED = "preset_generated",
  FIRST_PRESET_GENERATED = "first_preset_generated",
  TILE_SELECTED = "tile_selected",
  TIME_RET = "time_ret",
  CLEAR_CLICKED = "clear_clicked",
  DISBAND_GAME = "disband_game",
}

export const SocketEvents = { ...EventsSocketReceives, ...EventsSocketEmits };
