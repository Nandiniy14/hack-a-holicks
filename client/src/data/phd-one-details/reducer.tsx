import { combineReducers } from "redux";
import { IPHDDetails } from "../../types/IPHDDetails";
import { IReduxAction } from "../../types/IReduxAction";
import * as actions from "./actions";

const phdOneDetails = (
  state: IPHDDetails = {} as IPHDDetails,
  action: IReduxAction
) => {
  switch (action.type) {
    case actions.FETCH_PHD_ONE_DETAILS_SUCCEEDED:
      return action.payload;
    case actions.FETCH_PHD_ONE_DETAILS_FAILED:
      return {};
    default:
      return state;
  }
};

const locationDetails = (state: any[] = [], action: IReduxAction) => {
  switch (action.type) {
    case actions.FETCH_LOCATION_DETAILS_SUCCEEDED:
      return action.payload;
    case actions.FETCH_LOCATION_DETAILS_FAILED:
      return [];
    default:
      return state;
  }
};

export const reducer = combineReducers({
  phdOneDetails,
  locationDetails
});
