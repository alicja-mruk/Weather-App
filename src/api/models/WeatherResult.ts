export interface WeatherResult {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface Clouds {
  all: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Rain {
  '3h': number;
}

export interface Sys {
  pod: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: WeatherIcon;
}

export enum WeatherIcon {
  CLEAR_SKY = '01d',
  FEW_CLOUDS = '02d',
  SCATTERED_CLOUDS = '03d',
  BROKEN_CLOUDS = '04d',
  SHOWER_RAIN = '09d',
  RAIN = '10d',
  THUNDERSTORM = '11d',
  SNOW = '13d',
  MIST = '50d',
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
