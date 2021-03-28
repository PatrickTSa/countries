import { Dispatch } from 'redux';
import { ChangeFields, Country, CountryData } from '~/domain/country';
import client from '~/services/country';
import { COUNTRY_LIST_QUERY } from '~/services/country/queries';
import { COUNTRY } from '~/utils/consts';
import store from '~/redux/store';
import { CountryActions, CountryTypes } from './types';

export const getCountryList = () => (dispatch: Dispatch<CountryActions>) => {
  dispatch({
    type: CountryTypes.SET_LOADING,
    payload: {
      loading: true,
    },
  });

  client
    .query<CountryData>({
      query: COUNTRY_LIST_QUERY,
    })
    .then(({ data }) => {
      const countryList: Country[] = data.Country.map((country) => ({
        numericCode: country.numericCode,
        nativeName: country.nativeName,
        area: country.area,
        population: country.population,
        capital: country.capital,
        flag: country.flag,
        topLevelDomains: country.topLevelDomains,
      }));

      dispatch({
        type: CountryTypes.GET_LIST,
        payload: {
          list: countryList,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: CountryTypes.ERROR,
        payload: {
          error: 'Ocorreu um erro ao carregar os dados, tente novamente.',
        },
      });
    });
};

export const clearError = (): CountryActions => ({
  type: CountryTypes.CLEAR_ERROR,
});

export const change = (
  numericCode: string,
  field: ChangeFields,
  value: string | number
): CountryActions => {
  // const { list } = store.getState().country;

  const changes = localStorage.getItem(COUNTRY);
  const changeList: { [key: string]: string | number }[] = changes
    ? JSON.parse(changes)
    : [];

  const country = changeList.find((item) => item.numericCode === numericCode);

  if (country) {
    country[field] = value;
  } else {
    changeList.push({
      numericCode,
      [field]: value,
    });
  }

  localStorage.setItem(COUNTRY, JSON.stringify(changeList));

  return {
    type: CountryTypes.CHANGE,
    payload: {
      list: [],
    },
  };
};
