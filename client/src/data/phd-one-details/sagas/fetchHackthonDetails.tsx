import _ from "lodash";
import { call, put } from "redux-saga/effects";
import { IPHDDetails } from "../../../types/IPHDDetails";
import * as actions from "../actions";
import {
  getPHD1Runners,
  getPHD1Summary,
  getPHD1Winners
} from "../service-helpers";

export function* fetchHackthonDetails() {
  try {
    const winnersData = yield call(getPHD1Winners);
    const runnersData = yield call(getPHD1Runners);
    const phdSummaryData = yield call(getPHD1Summary);
    const phdDetails: IPHDDetails = {} as IPHDDetails;

    phdDetails.hours = phdSummaryData.hours;
    phdDetails.ideas = phdSummaryData.numberOfIdeas;
    phdDetails.participants = phdSummaryData.numberOfParticipants;
    phdDetails.teams = phdSummaryData.numberOfTeams;
    phdDetails.winners = [];
    phdDetails.runners = [];

    if (winnersData) {
      _.forEach(winnersData, item => {
        phdDetails.winners.push(item.name);
      });
    }
    if (runnersData) {
      _.forEach(runnersData, item => {
        phdDetails.runners.push(item.name);
      });
    }
    yield put(actions.fetchPHDOneDetailsSucceeded(phdDetails));
  } catch (ex) {
    yield put(actions.fetchPHDOneDetailsFailed());
    throw new Error("Error occured while fetching the PHD1 Details");
  }
}
