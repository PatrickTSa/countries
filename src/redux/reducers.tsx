import { combineReducers } from 'redux';
import CountryReducer from './country';

export default combineReducers({
  country: CountryReducer,
});
