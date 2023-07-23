import { getNumberInRange } from "../utils";
import { colorizePreset } from "../utils/GameLogic";
import { byDifficulty, Modes, Preset } from "../models";

export const getNextPreset = (
  difficulty: number,
  gameMode: number,
  score: number,
  usedPresets: string[],
): Preset => {
  if (!(difficulty in byDifficulty)) {
    throw new Error(`Invalid difficulty: ${difficulty}`);
  }

  //filters presetsList into only presets that aren't in usedPresets array
  let presetsList: Preset[] = byDifficulty[difficulty];
  if (usedPresets) {
    presetsList = presetsList.filter((preset) => {
      return !usedPresets.includes(preset.name);
    });
  }

  //randomly picks a preset from presetsList
  let numInRange: number = getNumberInRange(0, presetsList.length - 1);
  let res: Preset = presetsList[numInRange];
  if (gameMode === Modes.PAINT) {
    colorizePreset(res, score);
  }

  return res;
};
