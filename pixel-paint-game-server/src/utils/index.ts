export * from "./GameLogic";

export const getNumberInRange = (start: number, end: number): number => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};
