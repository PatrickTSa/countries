import { Reducer } from 'redux';
import { CountryState, CountryTypes } from './types';

const initialState: CountryState = {
  list: [],
  loading: false,
  error: null,
};

const reducer: Reducer<CountryState> = (state = initialState, action) => {
  switch (action.type) {
    case CountryTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case CountryTypes.GET_LIST:
      return {
        ...state,
        list: action.payload.list,
        loading: false,
      };
    case CountryTypes.ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case CountryTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case CountryTypes.CHANGE:
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};

export default reducer;
