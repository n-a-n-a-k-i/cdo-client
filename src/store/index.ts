import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountReducer} from "./account/account.reducer";
import {objectReducer} from "./object/object.reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    object: objectReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
