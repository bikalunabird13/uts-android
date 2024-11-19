import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import IconUser from '../../assets/user.svg';

export default function UserSCreen() {
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
              <Text style={{fontSize: 16, color: 'black'}}>Toko Iqbal</Text>
            </View>

            <View style={{padding: 16}}>
              <Text style={{color: 'black', fontSize: 16}}>Produk</Text>
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

            <View
              style={{height: 1, backgroundColor: 'lightgrey', width: '100%'}}
            />

            <View style={{padding: 16}}>
              <Text style={{color: 'black', fontSize: 16}}>Review Toko</Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 16,
                  alignItems: 'center',
                }}>
                <IconUser width={40} height={40} />
                <View
                  style={{
                    marginStart: 16,
                    justifyContent: 'center',
                    paddingEnd: 32,
                  }}>
                  <Text>4/5</Text>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 16,
                  alignItems: 'center',
                }}>
                <IconUser width={40} height={40} />
                <View
                  style={{
                    marginStart: 16,
                    justifyContent: 'center',
                    paddingEnd: 32,
                  }}>
                  <Text>4/5</Text>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 16,
                  alignItems: 'center',
                }}>
                <IconUser width={40} height={40} />
                <View
                  style={{
                    marginStart: 16,
                    justifyContent: 'center',
                    paddingEnd: 32,
                  }}>
                  <Text>4/5</Text>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Text>
                </View>
              </View>
            </View>
          </>
        }
      />
    </View>
  );
}
