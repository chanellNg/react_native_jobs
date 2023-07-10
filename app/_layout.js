import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"; // for custom fonts
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); //make splashscreen visible when app is loading
const Layout = () => {

  // set up fonts to use as constants
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  // load fonts onto screen
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      // only show homepage if fonts have been loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} /> 
}


export default Layout