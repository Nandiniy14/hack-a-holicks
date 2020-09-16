import _ from "lodash";
import {
    getDesks
} from "../service-helpers";
import * as actions from "../actions";
import { put, call } from "redux-saga/effects";
import { mapAndGroupDesks } from "../helpers/mapAndGroupDesks";

export function* fetchDesks() {
    try {
        const desksData = yield call(getDesks);
        const groupedDesks = yield call(mapAndGroupDesks, desksData)
        yield put(actions.fetchDesksSucceeded(groupedDesks));
    } catch (ex) {
        throw new Error("Error occured while fetching the PHD1 Details");
    }
}
