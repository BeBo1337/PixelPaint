// Produces a number in range [start, end]
export const GetNumberInRange = (start: number, end: number): number => {
    return Math.floor(Math.random() * (end - start + 1)) + start
}
