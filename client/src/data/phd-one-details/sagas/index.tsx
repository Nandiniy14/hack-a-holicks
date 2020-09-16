import { all, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchHackthonDetails } from "./fetchHackthonDetails";
import { fetchDesks } from "./fetchDesks";

export function* saga() {
  yield all([
    takeEvery(actions.FETCH_PHD_ONE_DETAILS_STARTED, fetchHackthonDetails),
    takeEvery(actions.FETCH_DESKS_STARTED, fetchDesks)
  ]);
}
