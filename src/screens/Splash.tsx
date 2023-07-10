import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import config from 'config';
import { Column, Heading, Spinner } from 'native-base';
import { RootStackParamList } from 'navigation/RootStack';
import { useEffect } from 'react';

const isConfigFullfilled =
  config.apiKey && config.baseUrl && config.googleUrl && config.googleApiKey;

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (isConfigFullfilled) {
      navigation.navigate('Weather');
    }
  }, [isConfigFullfilled]);

  if (!isConfigFullfilled) {
    return (
      <Column flex="1" alignItems="center" justifyContent="center">
        <Heading textAlign="center">It looks like the config.ts file is missing the keys</Heading>
      </Column>
    );
  }

  return (
    <Column flex="1">
      <Spinner size="lg" color="primary.100" />
    </Column>
  );
};

export default Splash;
