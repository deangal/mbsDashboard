import { combineReducers } from "redux";
import domainReducer from "./domain";
import filtersReducer from "./filter";
import selectedReducer from "./selected";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConifg = {
    key: 'root',
    storage,
    whitelist: ['Domain','Filters','Selected']
}

const rootReducer = combineReducers({
    Domain: domainReducer,
    Filters: filtersReducer,
    Selected: selectedReducer
})

export default persistReducer(persistConifg, rootReducer);