import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, LogBox } from 'react-native';
import RootStack from './src/Navigation/RootStack';
import dynamicLinks from '@react-native-firebase/dynamic-links';


function App() {
  const navigatorRef = useRef(null);

  useEffect(() => {
    LogBox.ignoreAllLogs();
    dynamicLinks().getInitialLink().then((link) => {
      handleDynamicLink(link)
    })
    const linkingListener = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      linkingListener();
    }
  }, [])

  const handleDynamicLink = (link) => {
    if (!!link?.url) {
      let getId = link.url?.split('=').pop()
      setTimeout(() => {
        navigatorRef.current?.navigate('MenuDetail', { recipeID: getId })
      }, 100);
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigatorRef}>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}

export default App;
