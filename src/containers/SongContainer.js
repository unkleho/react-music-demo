import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songActions from '../actions/songActions';
import Song from '../components/Song';

class SongContainer extends Component {
  render() {
    return (
      <Song {...this.props} />
    );
  }
}

SongContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    ...state.song
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(songActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
