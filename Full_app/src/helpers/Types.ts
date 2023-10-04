// Weather interfaces
export interface IWeatherBoxIProps {
  weather: IWeatherBox;
}

export interface IWeatherBoxInsights {
  main: string;
}

export interface IWeatherBox {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
  };
  weather: IWeatherBoxInsights[];
  wind: {
    deg: number;
    speed: number;
  };
}

// Pokemon interfaces
export interface Pokemon {
  pokemon: PokemonsStats;
}
export interface PokemonsStats {
  name: string;
  url: string;
  height: number;
  id: number;
  weight: number;
  abilities: PokemonAbilities[];
  forms: PokemonForms[];
  hp: PokemonBaseStat;
  speed: PokemonBaseStat;
  front_default: string;
}

export interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonForms {
  name: string;
  url: string;
}

export interface PokemonBaseStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

// Form interfaces
export default interface Form {
  username: string;
  name: string;
  surname: string;
  phone: number;
  email: string;
  companyName: string;
  typeOfCompany: string;
  companyAddress: string;
  companyCity: string;
  companyZipCode: number;
  bankAccountNumber: number;
  bankName: string;
  bankCode: number;
}

export interface FormErrorMessages {
  username?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
  companyname?: string;
  typeofcompany?: string;
  address?: string;
  city?: string;
  zip?: string;
  bankaccountnumber?: string;
  bankcode?: string;
  bankname?: string;
}
