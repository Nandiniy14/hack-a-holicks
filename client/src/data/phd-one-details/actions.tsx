import { IPHDDetails } from '../../types/IPHDDetails';
import { PACKAGE } from '../constants';
import { NAME } from './constants';

export const FETCH_PHD_ONE_DETAILS_STARTED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_STARTED`;
export const FETCH_PHD_ONE_DETAILS_SUCCEEDED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_SUCCEEDED`;
export const FETCH_PHD_ONE_DETAILS_FAILED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_FAILED`;

export const FETCH_DESKS_STARTED = `${PACKAGE}/${NAME}/FETCH_DESKS_STARTED`;
export const FETCH_DESKS_SUCCEEDED = `${PACKAGE}/${NAME}/FETCH_DESKS_SUCCEEDED`;
export const FETCH_DESKS_FAILED = `${PACKAGE}/${NAME}/FETCH_DESKS_FAILED`;




export const fetchPHDOneDetailsStarted = () => ({
    type: FETCH_PHD_ONE_DETAILS_STARTED
});

export const fetchPHDOneDetailsSucceeded = (data: IPHDDetails) => ({
    payload: data,
    type: FETCH_PHD_ONE_DETAILS_SUCCEEDED
});

export const fetchPHDOneDetailsFailed = () => ({
    type: FETCH_PHD_ONE_DETAILS_FAILED
});




export const fetchDesksStarted = () => ({
    type: FETCH_DESKS_STARTED
});

export const fetchDesksSucceeded = (groupedDesks: any) => ({
    payload: groupedDesks,
    type: FETCH_DESKS_SUCCEEDED
});

export const fetchDesksFailed = () => ({
    type: FETCH_DESKS_FAILED
});