import { applyMiddleware, createStore, Store } from 'redux';
import ReduxThunk from 'redux-thunk';
import { CountryState } from './country/types';
import Reducers from './reducers';

export interface ApplicationState {
  country: CountryState;
}

const store: Store<ApplicationState> = createStore(
  Reducers,
  applyMiddleware(ReduxThunk)
);

export default store;
