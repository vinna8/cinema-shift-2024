import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { cinemaReducer } from './cinema-reducer';

const reducers = combineReducers({
    cinema: cinemaReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
