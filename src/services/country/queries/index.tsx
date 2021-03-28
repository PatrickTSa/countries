import { gql } from '@apollo/client';

export const COUNTRY_LIST_QUERY = gql`
  query {
    Country {
      numericCode
      nativeName
      area
      population
      capital
      flag {
        svgFile
      }
      topLevelDomains {
        name
      }
    }
  }
`;
