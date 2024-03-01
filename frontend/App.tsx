
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from "./navigation/Navigator";
import {DefaultTheme, PaperProvider} from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};

export default function App() {

  return (
      <PaperProvider theme={theme}>
          <NavigationContainer>
              <Navigator/>
          </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
