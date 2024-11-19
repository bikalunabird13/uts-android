import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import IconShop from '../../assets/shop.svg';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <>
            <View
              style={{
                height: 50,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                paddingHorizontal: 16,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'black'}}>Profile Toko</Text>
            </View>

            <View style={{height: 200, backgroundColor: 'white'}}>
              <Image
                source={require('../../assets/bg.jpg')}
                style={{width: '100%', height: '100%'}}
              />
              <View
                style={{
                  position: 'absolute',
                  width: 150,
                  height: 50,
                  bottom: 52,
                  left: 16,
                }}>
                <IconShop width={50} height={50} />
                <Text style={{color: 'white', marginTop: 8, fontSize: 16}}>
                  Toko Iqbal
                </Text>
              </View>
            </View>

            <View style={{padding: 16}}>
              <Text style={{color: 'black', fontSize: 16}}>Info Toko</Text>
              <Text style={{color: 'black', fontSize: 14}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Text>
            </View>

            <View
              style={{height: 1, backgroundColor: 'lightgrey', width: '100%'}}
            />

            <View style={{padding: 16}}>
              <Text style={{color: 'black', fontSize: 16}}>
                Produk Unggulan
              </Text>
              <View style={{flexDirection: 'row', height: 200, marginTop: 8}}>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    borderColor: 'lightgrey',
                    marginHorizontal: 2,
                  }}>
                  <Image
                    source={require('../../assets/1.jpg')}
                    style={{width: '100%', height: '60%'}}
                  />
                  <Text>Sabun Cuci Piring</Text>
                  <Text>Rp. 10.000</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Beli</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Cart</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    borderColor: 'lightgrey',
                    marginHorizontal: 2,
                  }}>
                  <Image
                    source={require('../../assets/2.jpg')}
                    style={{width: '100%', height: '60%'}}
                  />
                  <Text>Sabun Mandi</Text>
                  <Text>Rp. 18.000</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Beli</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Cart</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    borderColor: 'lightgrey',
                    marginHorizontal: 2,
                  }}>
                  <Image
                    source={require('../../assets/3.jpg')}
                    style={{width: '100%', height: '60%'}}
                  />
                  <Text>Sabun Herbal</Text>
                  <Text>Rp. 24.000</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Beli</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>Cart</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </>
        }
      />
    </View>
  );
}
