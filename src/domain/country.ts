interface Flag {
  svgFile: string;
}

interface TopLevelDomain {
  name?: string;
}

export interface Country {
  numericCode: string;
  nativeName: string;
  area: number;
  population: number;
  capital: string;
  flag: Flag;
  topLevelDomains: TopLevelDomain[];
}

export interface CountryData {
  Country: Country[];
}

export type ChangeFields =
  | 'nativeName'
  | 'area'
  | 'population'
  | 'capital'
  | 'topLevelDomains';
