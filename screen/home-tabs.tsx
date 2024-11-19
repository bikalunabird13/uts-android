import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './sub-module/home';
import CariScreen from './sub-module/cari';
import KeranjangScreen from './sub-module/keranjang';
import PesananScreen from './sub-module/pesanan';
import UserScreen from './sub-module/user';
import {TouchableOpacity, View, Text} from 'react-native';
import * as React from 'react';

import IconHome from '../assets/home.svg';
import IconSearch from '../assets/search.svg';
import IconCart from '../assets/cart.svg';
import IconOrder from '../assets/order.svg';
import IconUser from '../assets/user.svg';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 8,
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey',
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {label === 'HomeScreen' && (
              <>
                <IconHome width={25} height={25} />
                <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                  Home
                </Text>
              </>
            )}
            {label === 'CariScreen' && (
              <>
                <IconSearch width={25} height={25} />
                <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                  Cari
                </Text>
              </>
            )}
            {label === 'KeranjangScreen' && (
              <>
                <IconCart width={25} height={25} />
                <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                  Keranjang
                </Text>
              </>
            )}
            {label === 'PesananScreen' && (
              <>
                <IconOrder width={25} height={25} />
                <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                  Pesanan
                </Text>
              </>
            )}
            {label === 'UserScreen' && (
              <>
                <IconUser width={25} height={25} />
                <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                  User
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function HomeTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CariScreen" component={CariScreen} />
      <Tab.Screen name="KeranjangScreen" component={KeranjangScreen} />
      <Tab.Screen name="PesananScreen" component={PesananScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
}
