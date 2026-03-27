import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../home/store';
import {reducer as detailReducer } from '../detail/store'


const reducer = combineReducers({
	home: homeReducer,
	detail:detailReducer
});

export default reducer;
