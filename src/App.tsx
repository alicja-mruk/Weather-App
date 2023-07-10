import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'api/queryClient';
import { theme } from 'config/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useInit } from 'hooks';
import { NativeBaseProvider, View } from 'native-base';
import { RootStack } from 'navigation/RootStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const { isReady } = useInit();

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <View flex="1" onLayout={onLayoutRootView}>
              <RootStack />
            </View>
          </NavigationContainer>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
