import { all } from 'redux-saga/effects';
import * as data from '../data';

export function* saga() {
    yield all([
        data.saga()
    ]);
}