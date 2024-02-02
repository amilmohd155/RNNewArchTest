import Mapbox, {Camera, LocationPuck, MapView} from '@rnmapbox/maps';
import {styled} from 'nativewind';
import React, {Text as RNText, View} from 'react-native';
import {Auth0Provider, useAuth0} from 'react-native-auth0';
import {Button, PaperProvider, Text} from 'react-native-paper';

const App = () => {
  Mapbox.setAccessToken(
    'sk.eyJ1IjoiYW1pbG1vaGQxNTUiLCJhIjoiY2xvaXNlN2NlMXB3djJxbWUyandqb2c4NCJ9.JDAJUeMCjyR7GWiReh-rtw',
  );
  const {authorize} = useAuth0();

  const StyledMapView = styled(MapView);

  const handleLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PaperProvider>
      {/* <View className="flex bg-black"> */}
      {/* <Text className="text-red-200 text-center">
          Open up App.tsx to start working on your app!
        </Text>
        <RNText className="text-yellow-300 text-center">
          Open up App.tsx to start working on your app!
        </RNText> */}
      {/* <StyledMapView className="flex-1" styleURL={Mapbox.StyleURL.Dark}>
        <Camera followZoomLevel={12} followUserLocation />
        <LocationPuck />
      </StyledMapView> */}
      {/* </View> */}

      <Auth0Provider
        domain={'dev-tcqg0hq4s1uu7xiz.uk.auth0.com'}
        clientId={'loZitVu88HjdamY8oTleUgFaL4BVAuHi'}>
        <Button onPress={handleLogin}>Auth</Button>
      </Auth0Provider>
    </PaperProvider>
  );
};

export default App;
