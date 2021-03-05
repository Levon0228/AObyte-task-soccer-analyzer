/** @format */

import { createStore, combineReducers } from "redux";
import PlayersDeducer from "./PlayersDeducer";

const reducers = combineReducers({ PlayersDeducer });
export const store = createStore(reducers);
