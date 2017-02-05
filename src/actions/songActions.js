import * as types from './actionTypes';

export const updateGrid = (grid) => {
  return {
    type: types.UPDATE_GRID,
    grid
  };
}

export const toggleGridNote = (note, step, duration) => {
  return {
    type: types.TOGGLE_GRID_NOTE,
    note,
    step,
    duration,
  }
}

export const togglePlay = () => {
  return {
    type: types.TOGGLE_PLAY,
  }
}

export const increaseTempo = () => {
  return {
    type: types.INCREASE_TEMPO,
  }
}

export const decreaseTempo = () => {
  return {
    type: types.DECREASE_TEMPO,
  }
}

export const increaseBars = () => {
  return {
    type: types.INCREASE_BARS,
  }
}

export const decreaseBars = () => {
  return {
    type: types.DECREASE_BARS,
  }
}

export const updateActiveStep = (keyCode) => {
  return {
    type: types.UPDATE_ACTIVE_STEP,
    keyCode,
  }
}
