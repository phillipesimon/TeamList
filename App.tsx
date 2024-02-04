import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from './src/theme';

import { NewGroup } from '@screens/NewGroup';
import { StatusBar } from 'expo-status-bar';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}