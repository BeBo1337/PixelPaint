import { getNextPreset } from "../services/tileset.service";
import { getNumberInRange } from ".";
import {
  Colors,
  presets,
  Preset,
  Tile,
  Coordinate,
  Modes,
  Constants,
  PuzzlePayload,
  MapData,
} from "../models";

const colors: string[] = [
  Colors.TILE_COLOR_A,
  Colors.TILE_COLOR_B,
  Colors.TILE_COLOR_C,
  Colors.TILE_COLOR_D,
  Colors.TILE_COLOR_E,
  Colors.TILE_COLOR_F,
];

export const generateTiles = (mapData: MapData): PuzzlePayload => {
  const { rows, columns, maxCount, score, gameMode } = mapData;
  let n: number = Constants.SHOULD_GENERATE_RANDOM;

  if (score >= Constants.SCORE_CHECKPOINT) {
    n = getNumberInRange(1, 3);
  }

  if (presets.length > 0 && n === Constants.SHOULD_GENERATE_RANDOM) {
    return generatePresetTiles(rows, score, gameMode);
  }

  return generateRandomTiles(rows, columns, maxCount, score, gameMode);
};

const generatePresetTiles = (
  size: number,
  score: number,
  gameMode: number
): PuzzlePayload => {
  let randomPreset = {} as Preset;
  if (size === 7)
    randomPreset = getNextPreset(getNumberInRange(1, 3), gameMode, score);
  if (size === 8)
    randomPreset = getNextPreset(getNumberInRange(4, 5), gameMode, score);

  return {
    tiles: randomPreset.picture,
    amount: randomPreset.amount,
    difficulty: randomPreset.difficulty,
  };
};

//Generates maxCount number of tiles to highlight in the grid
const generateRandomTiles = (
  rows: number,
  columns: number,
  maxCount: number,
  score: number,
  gameMode: number
): PuzzlePayload => {
  const randomTilesPreset: Preset = {
    picture: [],
    name: "random",
    amount: maxCount,
    difficulty: 1,
    size: columns * rows,
  };
  const toColor: Coordinate[] = [];

  //Checks if tile coordinates are already in the puzzle
  const findColored = (c: Coordinate) =>
    toColor.find((e) => e.i === c.i && e.j === c.j);

  while (toColor.length < maxCount) {
    const i = getNumberInRange(0, rows - 1);
    const j = getNumberInRange(0, columns - 1);

    if (!findColored({ i, j })) {
      toColor.push({ i, j });
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      randomTilesPreset.picture.push({
        i,
        j,
        highlighted: !!findColored({ i, j }),
      });
    }
  }
  if (gameMode == Modes.PAINT) colorizePreset(randomTilesPreset, score);

  return { tiles: randomTilesPreset.picture, amount: maxCount, difficulty: 1 };
};

//Relevant in PAINT mode

export const colorizePreset = (p: Preset, score: number) => {
  p.picture.forEach((tile: Tile) => {
    if (tile.highlighted) {
      tile.color = colors[getColorIndex(score)];
    }
  });
};

const getColorIndex = (score: number): number => {
  let n: number;
  if (score >= 0 && score < 3) n = getNumberInRange(0, 2);
  else if (score >= 3 && score < 10) n = getNumberInRange(0, 3);
  else if (score >= 10 && score < 20) n = getNumberInRange(0, 4);
  else n = getNumberInRange(0, 5);
  return n;
};

//Relevant in PAINT mode, updates coloredObjectiveTiles amount correctly according to the state
export const isCorrectTile = (
  tile: Tile,
  highlighted: boolean,
  color?: string,
  prevColor?: string
): number => {
  if (highlighted && tile.color === color) return 1;
  if (highlighted && tile.color !== color && prevColor === tile.color)
    return -1;
  if (!highlighted && tile.color === color) return -1;
  if (highlighted && tile.color !== color) return 0;
  else return 0;
};
