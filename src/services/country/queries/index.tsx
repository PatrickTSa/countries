import { gql } from '@apollo/client';

export const COUNTRY_LIST_QUERY = gql`
  query {
    Country {
      numericCode
      nativeName
      area
      population
      populationDensity
      capital
      location {
        latitude
        longitude
      }
      officialLanguages {
        nativeName
      }
      currencies {
        name
        symbol
      }
      flag {
        svgFile
      }
      callingCodes {
        name
      }
    }
  }
`;
