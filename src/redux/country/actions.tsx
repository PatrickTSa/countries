import { Dispatch } from 'redux';
import { ChangeFields, Country, CountryData } from '~/domain/country';
import client from '~/services/country';
import { COUNTRY_LIST_QUERY } from '~/services/country/queries';
import { COUNTRY } from '~/utils/consts';
import store from '~/redux/store';
import { CountryActions, CountryTypes } from './types';

const mergeCountryList = (list: Country[]): Country[] => {
  const changes = localStorage.getItem(COUNTRY);
  const changeList: { [key: string]: string | number }[] = changes
    ? JSON.parse(changes)
    : [];

  changeList.forEach((changedItem) => {
    const country: any = list.find(
      (item) => item.numericCode === changedItem.numericCode
    );

    if (country) {
      const values = Object.values(changedItem);
      Object.keys(changedItem).forEach((key, index) => {
        if (key !== 'numericCode') {
          country[key] = values[index];
        }
      });
    }
  });

  return list;
};

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
          list: mergeCountryList(countryList),
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
  const { list } = store.getState().country;
  const changes = localStorage.getItem(COUNTRY);
  const changeList: {
    [key: string]: string | number | { name: string }[];
  }[] = changes ? JSON.parse(changes) : [];

  const country = changeList.find((item) => item.numericCode === numericCode);

  if (country) {
    country[field] =
      field === 'topLevelDomains'
        ? String(value)
            .split(',')
            .map((v) => ({ name: v }))
        : value;
  } else {
    changeList.push({
      numericCode,
      [field]:
        field === 'topLevelDomains'
          ? String(value)
              .split(',')
              .map((v) => ({ name: v }))
          : value,
    });
  }

  localStorage.setItem(COUNTRY, JSON.stringify(changeList));

  return {
    type: CountryTypes.CHANGE,
    payload: {
      list: mergeCountryList(list),
    },
  };
};

export const resetInfo = (numericCode: string) => {
  const { list } = store.getState().country;
  const changes = localStorage.getItem(COUNTRY);
  const changeList: { [key: string]: string | number }[] = changes
    ? JSON.parse(changes)
    : [];

  if (changeList) {
    const index = changeList.findIndex(
      (item) => item.numericCode === numericCode
    );

    if (index > -1) {
      changeList.splice(index, 1);
      localStorage.setItem(COUNTRY, JSON.stringify(changeList));
    }
  }

  return {
    type: CountryTypes.RESET,
    payload: {
      list: mergeCountryList(list),
    },
  };
};
