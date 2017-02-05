import React, { Component, PropTypes } from 'react';

import './PianoRoll.css';
import { midiNotes } from '../../constants';
import { pianoGridToRoll } from '../../selectors';

class Piano extends Component {

  static defaultProps = {
    grid: PropTypes.array,
    resolution: PropTypes.number,
    bars: PropTypes.number,
    skip: PropTypes.number,
    limit: PropTypes.number,
    onNoteClick: PropTypes.func,
  }

  handleStepClick = (event, keyIndex, step, duration, skip) => {
    // Convert keyIndex to note (take skip into account)
    const note = midiNotes[keyIndex + skip];

    this.props.onNoteClick(note, step, duration);
  }

  render() {
    const { grid, resolution, bars, skip, limit } = this.props;
    const pianoRoll = pianoGridToRoll(grid, resolution, bars, skip, limit);

    return (
      <div className="piano-roll">
        {
          pianoRoll.map((keySteps, i) => {
            return(
              <div className="piano-roll__note">
                {/* <span>{i}</span> */}

                <div className="piano-roll__note__steps">
                  {
                    keySteps.map((keyStep, step) => {
                      return(
                        <div
                          className="piano-roll__note__step"
                          onClick={event => this.handleStepClick(event, i, step,  keyStep && keyStep.duration, skip)}
                        >
                          {keyStep && keyStep.note}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Piano;
