export interface Game {
  roomId: string;
  score: number;
  players: string[];
  gameMode: number;
  usedPresets: string[];
}

export class GameSession implements Game {
  roomId: string = "";
  score: number = 0;
  players: string[] = [];
  gameMode: number = 0;
  usedPresets: string[] = [];
  host: string = "";

  constructor(roomId: string, players: string[], gameMode: number) {
    this.host = players[0];
    this.roomId = roomId;
    this.players = players;
    this.gameMode = gameMode;
  }

  increaseScore(): void {
    this.score++;
  }
}
