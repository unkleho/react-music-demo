import React, { Component, PropTypes } from 'react';
import { Song as ReactMusicSong, Sequencer, Synth } from 'react-music';

import './Song.css';
import PianoRoll from '../PianoRoll';
import { gridToSynthSteps } from '../../selectors';

class Song extends Component {

  static defaultProps = {
    sequence: PropTypes.object,
    isPlaying: PropTypes.bool,
    resolution: PropTypes.number,
    tempo: PropTypes.number,
    bars: PropTypes.number,
    tracks: PropTypes.object,
  }

  componentDidMount() {
    // Toggle play on spacebar press
    document.onkeypress = (e) => {
      e = e || window.event;
      if (e.keyCode === 32) {
        this.props.actions.togglePlay();
      }
    };
  }

  render() {
    const {
      togglePlay,
      increaseTempo,
      decreaseTempo,
      increaseBars,
      decreaseBars,
    } = this.props.actions;
    const pianoSteps = gridToSynthSteps(this.props.tracks['piano_1'].grid);

    return (
      <div className="song">
        <div className="interface">
          <div className="button button--play" onClick={togglePlay}>{
            this.props.isPlaying ? 'Stop' : 'Play'
          }</div>

          <div className="interface__box">
            <div className="interface__label">{this.props.tempo}</div>
            <div className="button" onClick={increaseTempo}>+</div>
            <div className="button" onClick={decreaseTempo}>-</div>
          </div>

          <div className="interface__box">
            <div className="interface__label">{this.props.bars}</div>
            <div className="button" onClick={increaseBars}>+</div>
          <div className="button" onClick={decreaseBars}>-</div>
          </div>
        </div>

        <PianoRoll
          grid={this.props.tracks['piano_1'].grid}
          resolution={this.props.tracks['piano_1'].resolution}
          bars={this.props.tracks['piano_1'].bars}
          skip={60}
          limit={12}
          onNoteClick={this.props.actions.toggleGridNote}
        />

        <ReactMusicSong tempo={this.props.tempo} playing={this.props.isPlaying}>
          <Sequencer resolution={this.props.resolution} bars={this.props.bars}>
            <Synth
              type="square"
              steps={pianoSteps}
            />
          </Sequencer>
        </ReactMusicSong>
      </div>
    );
  }
}

export default Song;
