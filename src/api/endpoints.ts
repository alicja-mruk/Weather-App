import config from 'config';
import publicAxios from './axios';
import { GoogleApiResult, Location } from './models/GoogleApiResult';

export const Endpoints = {
  getFiveDaysForecast: (location: Location) =>
    `forecast?lat=${location.lat}&lon=${location.lng}&appid=${config.apiKey}`,
};

export const getCoordsByCity = async (city: string): Promise<Location> => {
  const url = `${config.googleUrl}?address=${encodeURIComponent(city)}&language=en&key=${
    config.googleApiKey
  }`;

  return publicAxios.get<GoogleApiResult>(url).then(res => res.data.results[0].geometry.location);
};
