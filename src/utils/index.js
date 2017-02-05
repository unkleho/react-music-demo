import { instrumentConfig } from '../constants';

export function getDuration(tempo, bars) {
  return ( (bars * 240) / tempo ) * 1000;
}

export function getStringNote(instrument, stringIndex) {
  return instrumentConfig[instrument].strings[stringIndex];
}
