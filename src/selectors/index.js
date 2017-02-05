import { midiNotes } from '../constants';

/*
 * Piano Functions
 *
 */

// Converts grid (state) to piano roll (view)
export function pianoGridToRoll(grid, resolution, bars, skip = 0, limit = 12) {
  const notes = midiNotes.slice(skip, skip + limit);

  const result = notes.map((note) => {
    return Array(resolution * bars).fill(null).map((nothing, step) => {

      // Check if grid has note and step
      const gridCheck = grid.filter((noteObject) => {
        return noteObject.note === note &&
          noteObject.step === step;
      })

      // Return noteObject if it exists
      return gridCheck[0] || null;
    });
  })

  return result;
}

/*
 * React Music Functions
 *
 */

// Converts grid to React Music synth steps
export function gridToSynthSteps(grid) {
  let result = [];

  grid.forEach((noteObject) => {
    result.push([
      noteObject.step,
      noteObject.duration,
      noteObject.note,
    ]);
  });

  return result;
}
