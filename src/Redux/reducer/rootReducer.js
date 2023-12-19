import { combineReducers } from "redux";
import incrementAndDecrement from "../incrementAndDecrement/incrementAndDecrement";

export const rootReducer = combineReducers(incrementAndDecrement);
