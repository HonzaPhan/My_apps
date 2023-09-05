interface IWeatherBoxIProps {
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

export default IWeatherBoxIProps;
