export interface JoinRoomPayload {
  roomId: string;
  gameMode: number;
  players: string[];
  host: string;
  playerJoined: boolean;
}
