import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {parse} from '@babel/core';

// const {width} = Dimensions.sc("width")
// import {}from "./"

const WIDTH = Dimensions.get('window').width;
const HomeScreen = () => {
  const ApiLink = 'https://api.xentice.com/api/postadSelect';
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(ApiLink);
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const numColumns = 2;
  const renderComponents = ({item, index}) => {
    console.log(item, index);
    return (
      <View style={{flex: 1, }}>
        <Text style={tw`text-black text-lg font-semibold m-2 `}>
          {JSON.parse(item.propertyType).name}
        </Text>
        <View
          style={{
            width: WIDTH / 2 - 16,
            flex: 1,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            marginHorizontal: 8,
            marginVertical: 8,
          }}>
          {/* <View style={tw`my-5 `}>
         
        </View> */}

          <View style={tw` `}>
            <Image
              source={{uri: JSON.parse(item.images)[0]}}
              style={{
                width: '100%',
                height: 180,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <TouchableOpacity style={tw`absolute top-0 right-0  `}>
              <View style={tw`rounded-full   text-slate-400	  `}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    opacity: 0.8,
                    tintColor: '#ccc',
                    borderRadius: 50,
                  }}
                  source={require('../icons/like.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw``}>
            <View style={tw`flex-row justify-between items-center mr-2`}>
              <Text style={tw`text-black  text-lg ml-2`}>
                {JSON.parse(item.transactionType).name}
              </Text>
              <Text style={tw`text-red-500 font-bold text-xs`}>Rs=2500/Hr</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image
                source={require('../icons/location.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: 'green',
                }}
              />
              <Text style={tw`text-black text-base my-3 font-medium`}>
                {' '}
                {JSON.parse(item.location).city}{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`p-1  `}>
        <View style={tw`flex-row  items-center justify-between  `}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <View>
                <Image
                  style={{width: 60, height: 70, resizeMode: 'contain'}}
                  source={require('../icons/sidebar.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={tw`  items-center  mt--5 `}>
                <Image
                  style={{width: 100, height: 100, resizeMode: 'contain'}}
                  source={{
                    uri: 'https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw`mr-2 `}>
            <TouchableOpacity>
              <Image
                // style={tw`w-30 h-30,`}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  borderRadius: 150 / 2,
                  backgroundColor: '#E3E6E8',
                }}
                source={require('../icons/avater.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row  mx-5  items-center `}>
          <Image
            style={{
              marginLeft: 5,
              position: 'absolute',
              width: 25,
              height: 40,
              resizeMode: 'contain',
              borderColor: '#D6D6D6',
              borderRadius: 1,
              tintColor: '#E3E6E8',
            }}
            source={require('../icons/search.png')}
          />
          <TextInput
            style={tw` h-10 pl-7 w-full   rounded-md focus:outline-none border-2	 border-stone-300`}
            type="search"
            placeholder="Search"
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={tw`flex-row mt-5 mx-5	`}>
          <TouchableOpacity>
            <View
              style={tw`	flex  items-center mr-3 border rounded-md w-25 h-8 border-stone-300`}>
              <Text style={tw`text-black   text-base  font-semibold`}>
                Property
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tw`text-gray-500	 text-base  `}>Service</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-around mx-3 my-3 `}>
          <View style={tw`border border-slate-300 w-20 h-20 items-center p-2`}>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../icons/int.png')}
            />
            <Text style={tw`text-gray-500	 text-center `}>industrial land</Text>
          </View>
          <View style={tw`border border-slate-300 w-20 h-20 items-center p-2`}>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../icons/int.png')}
            />
            <Text style={tw`text-gray-500	 text-center `}>industrial land</Text>
          </View>
          <View style={tw`border border-slate-300 w-20 h-20 items-center p-2`}>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../icons/int.png')}
            />
            <Text style={tw`text-gray-500	 text-center `}>industrial land</Text>
          </View>
          <View style={tw`border border-slate-300 w-20 h-20 items-center p-2`}>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../icons/int.png')}
            />
            <Text style={tw`text-gray-500	 text-center `}>industrial land</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderComponents}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
