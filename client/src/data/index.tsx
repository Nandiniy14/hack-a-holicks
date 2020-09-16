import { all } from 'redux-saga/effects';
import * as phdOneDetails from './phd-one-details';
import * as dataConstants from './constants';

/**
 * Add all the sagas of each module here
 */

function* saga() {
    yield all([
        phdOneDetails.saga()
    ]);
}

export {
    dataConstants,
    phdOneDetails,
    saga
};

