import { Country } from '~/domain/country';

export enum CountryTypes {
  GET_LIST = '@country/GET_LIST',
  SET_LOADING = '@country/SET_LOADING',
  ERROR = '@country/ERROR',
  CLEAR_ERROR = '@country/CLEAR_ERROR',
  CHANGE = '@country/CHANGE',
}

export interface CountryState {
  loading: boolean;
  list: Country[];
  error: string | null;
}

interface ClearError {
  type: CountryTypes.CLEAR_ERROR;
}

interface GetCountryList {
  type: CountryTypes.GET_LIST;
  payload: {
    list: Country[];
  };
}

interface SetLoading {
  type: CountryTypes.SET_LOADING;
  payload: {
    loading: boolean;
  };
}

interface Error {
  type: CountryTypes.ERROR;
  payload: {
    error: string;
  };
}

interface Change {
  type: CountryTypes.CHANGE;
  payload: {
    list: Country[];
  };
}

export type CountryActions =
  | ClearError
  | GetCountryList
  | SetLoading
  | Error
  | Change;
