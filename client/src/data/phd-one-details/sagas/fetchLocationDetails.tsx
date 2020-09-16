import { call, put } from "redux-saga/effects";
import { getLocationDetails } from "../service-helpers";
import * as actions from "../actions";
import { cloneDeep } from "lodash";

export function* fetchLocationDetails() {
    try{
        const locations: any[] = yield call(getLocationDetails);
        const locationsData: any[] = cloneDeep(locations);
        locationsData.forEach((data: any) => {
          data.text = data.name;
          data.value = data.name;
        });
        console.log(locationsData)
        yield put(actions.fetchLocationDetailsSucceeded(locationsData));
    } catch(error){
        yield put(actions.fetchLocationDetailsFailed())
    }
 
}
