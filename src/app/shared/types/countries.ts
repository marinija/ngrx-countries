type NativeName = {
  eng: {
    official: string;
    common: string;
  }
}

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type Flags = {
  png: string;
  svg: string;
}

type CapitalInfo = {
  latlng: Array<number>;
}

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
}

export interface ICounties {
    name: Name;
    independent: boolean,
    status: string,
    capital: Array<string>;
    region: string;
    languages: {
        eng: string
    },
    latlng: Array<number>
    maps: Maps;
    population: number,
    timezones: Array<string>;
    continents: Array<string>;
    flags: Flags;
    startOfWeek: string,
    capitalInfo: CapitalInfo;
}
