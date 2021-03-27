interface Location {
  latitude: number;
  longitude: number;
}

interface Language {
  nativeName: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Flag {
  svgFile: string;
}

interface CallCode {
  name: string;
}

export interface Country {
  numericCode: string;
  nativeName: string;
  area: number;
  population: number;
  populationDensity: number;
  capital: string;
  location: Location;
  officialLanguages: Language;
  currencies: Currency;
  flag: Flag;
  callingCodes: CallCode;
}

export interface CountryData {
  Country: Country[];
}
