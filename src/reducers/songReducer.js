import * as types from '../actions/actionTypes';
import { defaultPianoGrid } from '../constants';

export default (state = {
  step: 0,
  isPlaying: false,
  resolution: 8,
  bars: 2,
  tempo: 90,
  tracks: {
    piano_1: {
      name: 'Piano 1',
      instrument: 'piano',
      grid: defaultPianoGrid,
      resolution: 8,
      bars: 2,
    },
  },
}, action) => {
  switch (action.type) {

    case types.TOGGLE_GRID_NOTE:

      let newGrid;
      const grid = state.tracks.piano_1.grid;

      const filteredGrid = grid.filter((element) => {
        return !(element.step === action.step && element.note === action.note);
      })

      // Test original grid and filtered grid.
      const hasNote = (filteredGrid.length !== grid.length) ? true : false;

      if (hasNote) {
        // Remove from array
        newGrid = filteredGrid;
      } else {
        // Add to array
        newGrid = grid.concat({
          step: action.step,
          note: action.note,
          duration: action.duration,
        });
      }

      return {
        ...state,
        tracks: {
          ...state.tracks,
          piano_1: {
            ...state.tracks.piano_1,
            grid: newGrid,
          }
        }
      }

    case types.TOGGLE_PLAY:

      return {
        ...state,
        isPlaying: !state.isPlaying,
      }

    case types.INCREASE_TEMPO:
      return {
        ...state,
        tempo: ++state.tempo,
      }

    case types.DECREASE_TEMPO:

      return {
        ...state,
        tempo: --state.tempo,
      }

    case types.INCREASE_BARS:
      return {
        ...state,
        bars: ++state.bars,
      }

    case types.DECREASE_BARS:

      return {
        ...state,
        bars: --state.bars,
      }

    default:
      return state;
  }
};
