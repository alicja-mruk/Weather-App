import { MaterialCommunityIcons } from '@expo/vector-icons';
import { List, WeatherIcon } from 'api/models/WeatherResult';
import dayjs from 'dayjs';
import { Column, Heading, Icon, Row, Text } from 'native-base';

type Props = {
  item: List;
};

const WeatherCard = ({ item }: Props) => {
  const iconLabelAndName = getWeatherIconAndLabelByCode(item.weather[0].icon);

  return (
    <Column py="3" bg="white" rounded="8" my="2" px="4" space="2">
      <Heading size="sm">Hour: {dayjs(item.dt_txt).format('HH:MM, DD. MMM')}</Heading>
      <WeatherCardRow
        iconName={iconLabelAndName.iconName}
        text={iconLabelAndName.label}
        iconColor="blue.400"
      />
      <WeatherCardRow iconName="cloud" text={`${item.clouds.all}%`} />
      <WeatherCardRow iconName="eye" text={`${item.visibility}%`} />
      <WeatherCardRow iconName="weather-windy" text={`${item.wind.speed} km/h`} />
      <WeatherCardRow iconName="text-box-outline" text={`${item.weather[0].description}`} />
    </Column>
  );
};

// https://openweathermap.org/weather-conditions
const getWeatherIconAndLabelByCode = (code: WeatherIcon): { label: string; iconName: string } => {
  switch (code) {
    case WeatherIcon.BROKEN_CLOUDS: {
      return { label: 'Broken clouds', iconName: 'weather-cloudy' };
    }
    case WeatherIcon.CLEAR_SKY: {
      return { label: 'Clear Sky', iconName: 'weather-sunny' };
    }
    case WeatherIcon.FEW_CLOUDS: {
      return { label: 'Few clouds', iconName: 'weather-cloudy' };
    }
    case WeatherIcon.SHOWER_RAIN: {
      return { label: 'Shower rain', iconName: 'weather-rainy' };
    }
    case WeatherIcon.RAIN: {
      return { label: 'Rain', iconName: 'weather-pouring' };
    }
    case WeatherIcon.THUNDERSTORM: {
      return { label: 'Thunderstorm', iconName: 'weather-lightning' };
    }
    case WeatherIcon.SNOW: {
      return { label: 'Snow', iconName: 'weather-snowy' };
    }
    case WeatherIcon.MIST: {
      return { label: 'Mist', iconName: 'weather-fog' };
    }
    default: {
      return { label: 'Sunny', iconName: 'weather-sunny' };
    }
  }
};

type WeatherCardRowProps = {
  iconName: string;
  iconColor?: string;
  text: string;
};

const WeatherCardRow = ({ iconName, text, iconColor = 'red.400' }: WeatherCardRowProps) => (
  <Row space="2" alignItems="center">
    <Icon as={MaterialCommunityIcons} name={iconName} size={6} color={iconColor} />
    <Text>{text}</Text>
  </Row>
);

export default WeatherCard;
