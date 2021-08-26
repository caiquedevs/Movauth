import { all } from 'redux-saga/effects';
import drivers from './drivers/sagas';
import travels from './travels/sagas';

export default function* rootSaga(): any {
  return yield all([drivers, travels]);
}
