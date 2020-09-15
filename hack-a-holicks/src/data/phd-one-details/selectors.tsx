import { get } from "lodash";
import { IPHDDetails } from "../../types/IPHDDetails";
import { PACKAGE } from "../constants";
import { NAME } from "./constants";

export const getPHDOneDetails = (state: object): IPHDDetails =>
    get(state, `${PACKAGE}.${NAME}.phdOneDetails`, {});