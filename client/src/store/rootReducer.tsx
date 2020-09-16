import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import * as data from '../data';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    [data.dataConstants.PACKAGE]: combineReducers({
        [data.phdOneDetails.constants.NAME]: data.phdOneDetails.reducer
    })
});