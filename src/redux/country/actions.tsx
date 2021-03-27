import { Dispatch } from 'redux';
import { Country, CountryData } from '~/domain/country';
import client from '~/services/country';
import { COUNTRY_LIST_QUERY } from '~/services/country/queries';
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
        populationDensity: country.populationDensity,
        capital: country.capital,
        location: country.location,
        officialLanguages: country.officialLanguages,
        currencies: country.currencies,
        flag: country.flag,
        callingCodes: country.callingCodes,
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
