interface IWeatherBoxIProps {
    weather: IWeatherBox
}

export interface IWeatherBoxInsights {
    main: string
}

export interface IWeatherBox {
    name: string,
    sys: {
        country: string
    },
    main: {
        temp: number
    },
    weather: IWeatherBoxInsights[]
}

export default IWeatherBoxIProps