import { RouteProp, useRoute } from '@react-navigation/native';
import { List, WeatherResult } from 'api/models/WeatherResult';
import { CacheKey, queryClient } from 'api/queryClient';
import dayjs from 'dayjs';
import { Center, Column, Heading, SectionList } from 'native-base';
import { RootStackParamList } from 'navigation/RootStack';
import { useCallback } from 'react';
import WeatherCard from './WeatherCard';

const WeatherDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'WeatherDetails'>>();

  const data = queryClient.getQueryData<WeatherResult>([CacheKey.Weather, route.params.city]);

  const groupedData = mapResultToSectionArrayByDate(data);

  const renderItem = useCallback(({ item }: { item: List }) => <WeatherCard item={item} />, []);

  return (
    <Column safeArea p="4">
      {/* TODO: in real app use some kind of translations library */}
      <Heading>{`City: ${data?.city.name}`}</Heading>
      <SectionList
        sections={groupedData}
        renderSectionHeader={({ section: { title } }) => (
          <Center bg="green.100">
            <Heading fontSize="md" pt="2" mt="2" pb="4">
              Date: {dayjs(title).format('DD/MM/YYYY')}
            </Heading>
          </Center>
        )}
        renderItem={renderItem}
        // We shouldn't use index as key, but in this case it's ok since there are no modifications on the list
        keyExtractor={(item, index) => index.toString()}
      />
    </Column>
  );
};

const mapResultToSectionArrayByDate = (
  data: WeatherResult | undefined,
): { title: string; data: List[] }[] => {
  if (!data) {
    return [];
  }

  const dataGroupedByDate: Record<string, List[]> = data.list.reduce(
    (days, row) => {
      const date = row.dt_txt.split(' ')[0];
      days[date] = [...(days[date] ? days[date] : []), row];
      return days;
    },
    {} as Record<string, List[]>,
  );

  return Object.entries(dataGroupedByDate).map(([date, items]) => {
    return {
      title: date,
      data: items,
    };
  });
};

export default WeatherDetails;
