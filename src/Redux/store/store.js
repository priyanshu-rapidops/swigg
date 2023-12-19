import { createStore } from "redux";
import incrementAndDecrement from "../incrementAndDecrement/incrementAndDecrement";

const store = createStore(incrementAndDecrement);

console.log("store", store);

export default store;
