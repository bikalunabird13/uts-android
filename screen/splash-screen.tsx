import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import IconShop from '../assets/shop.svg';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigateToLogin();
  }, []);

  const navigateToLogin = () => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('LoginScreen'));
    }, 2 * 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <IconShop width={150} height={150} />
      <Text style={{marginTop: 16, fontSize: 24, color: 'black'}}>
        IQBAL SHOP
      </Text>
      <View style={{position: 'absolute', bottom: 16}}>
        <Text style={{fontSize: 14, color: 'black'}}>Iqbal Santosa UTS</Text>
      </View>
    </View>
  );
}
