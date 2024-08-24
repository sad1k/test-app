interface IName {
  common: string;
  official: string;
}

interface IFlag {
  png: string;
  svg: string;
  alt: string;
}

type Capital = string;

export interface CountryData {
  name: IName;
  flags: IFlag;
  capital: Capital[];
}
