import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import IconShop from '../assets/shop.svg';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToHome = () => {
    if (username === '') {
      Alert.alert('Peringatan', 'Username tidak boleh kosong');
      return;
    }

    if (password === '') {
      Alert.alert('Peringatan', 'Password tidak boleh kosong');
      return;
    }

    if (username !== 'iqbal' && password !== '123456') {
      Alert.alert('Peringatan', 'Username atau Password salah!');
      return;
    }

    navigation.dispatch(StackActions.replace('HomeTabs'));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <IconShop width={100} height={100} />
      <Text style={{marginTop: 16, fontSize: 16, color: 'black'}}>
        IQBAL SHOP
      </Text>

      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'lightgrey',
          marginVertical: 16,
        }}
      />

      <Text style={{color: 'black', fontSize: 16}}>Login</Text>

      <View style={{width: '100%'}}>
        <Text style={{color: 'black', fontSize: 14}}>Username</Text>
        <TextInput
          onChangeText={(e: string) => setUsername(e)}
          placeholder="Masukan Username"
          style={{
            borderWidth: 1,
            borderColor: 'lightgrey',
            paddingHorizontal: 16,
            borderRadius: 8,
            marginTop: 8,
          }}
        />
        <Text style={{color: 'black', fontSize: 14, marginTop: 8}}>
          Password
        </Text>
        <TextInput
          onChangeText={(e: string) => setPassword(e)}
          placeholder="Masukan password"
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: 'lightgrey',
            paddingHorizontal: 16,
            borderRadius: 8,
            marginTop: 8,
          }}
        />
        <Pressable
          onPress={navigateToHome}
          style={{
            height: 50,
            backgroundColor: '#20215A',
            borderRadius: 8,
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14}}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
