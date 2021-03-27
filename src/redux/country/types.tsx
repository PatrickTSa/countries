import { Country } from '~/domain/country';

export enum CountryTypes {
  GET_LIST = '@country/GET_LIST',
  SET_LOADING = '@country/SET_LOADING',
  ERROR = '@country/ERROR',
  CLEAR_ERROR = '@country/CLEAR_ERROR',
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

export type CountryActions = ClearError | GetCountryList | SetLoading | Error;
