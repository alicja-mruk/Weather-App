import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import {
  Button,
  Column,
  FormControl,
  Input,
  ScrollView,
  Stack,
  WarningOutlineIcon,
} from 'native-base';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/RootStack';
import * as yup from 'yup';
import useCityWeather from './hooks/useCityWeather';

type WeatherFormValues = {
  city: string;
};

const validationSchema = yup.object().shape({
  city: yup.string().required('City is Required'),
});

const Weather = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSubmit = async (values: WeatherFormValues) => {
    try {
      await refetch();
      navigation.navigate('WeatherDetails', { city: values.city });
    } catch (e) {
      console.error(e);
      alert('Error', 'Something went wrong');
      // In real app send error to Sentry or other error tracking service
    }
  };

  const { values, setFieldValue, errors } = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema,
    onSubmit,
  });

  const { isRefetching, refetch } = useCityWeather({ city: values.city });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Column
        safeArea
        alignItems="center"
        space="12"
        justifyContent="center"
        p="4"
        flex="1"
        alignContent={'center'}>
        <FormControl isInvalid={Boolean(errors.city)} h="140px">
          <Stack mx="4" space="4">
            <FormControl.Label alignSelf="center">
              Type in city and press the button
            </FormControl.Label>
            <Input
              onChangeText={text => setFieldValue('city', text)}
              value={values.city}
              isRequired
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
              color="red.800"
              alignSelf="center">
              {errors.city}
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Button
          onPress={() => onSubmit(values)}
          width="50%"
          isDisabled={Boolean(errors.city)}
          isLoading={isRefetching}>
          Search
        </Button>
      </Column>
    </ScrollView>
  );
};

export default Weather;
