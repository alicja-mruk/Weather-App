import { useQuery } from '@tanstack/react-query';
import publicAxios from 'api/axios';
import { Endpoints, getCoordsByCity } from 'api/endpoints';
import { WeatherResult } from 'api/models/WeatherResult';
import { CacheKey } from 'api/queryClient';

type Props = {
  city: string;
};

const useCityWeather = ({ city }: Props) => {
  return useQuery({
    queryKey: [CacheKey.Weather, city],
    queryFn: () => getWeatherByCity(city),
    enabled: false,
    staleTime: Infinity,
  });
};

const getWeatherByCity = async (city: string) => {
  const location = await getCoordsByCity(city);
  const getForecast = () =>
    publicAxios.get<WeatherResult>(Endpoints.getFiveDaysForecast(location)).then(res => res.data);

  return getForecast();
};

export default useCityWeather;
