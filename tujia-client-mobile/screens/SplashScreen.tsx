import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import tw from 'twrnc';

const SplashScreen = () => {
      const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900 items-center`}>
      <View style={tw`w-11/12 h-36 mt-16 flex justify-center items-center`}>
        <Image
          source={require('../assets/images/logo.png')}
          style={tw`w-4/6 h-10 bg-cover`}
        />
      </View>
      <View style={tw`flex-1 w-full h-2/5 items-center justify-evenly`}>
        <View style={tw`flex h-2/5 items-center justify-evenly`}>
          <Text style={tw`text-3xl px-10 font-bold text-center text-[#17CBB7]`}>
            Welcome to Pill Reminder App !
          </Text>
          <Text style={tw`text-base px-1 text-center text-slate-100`}>
            TUJIA is a free pll reminder and medication tracker.This medicine
            app helps you to remember about every pill you need to take
            regardless of how complex your treatment is.
          </Text>
        </View>

        <View style={tw`flex items-center w-4/5 rounded-lg`}>
          <View
            style={tw`flex h-12 flex-row items-center w-full bg-slate-50 rounded-2xl`}
          >
            <TouchableOpacity
              style={tw`w-1/2 h-full rounded-l-2xl rounded-r-2xl flex justify-center bg-[#17CBB7]`}
              // @ts-ignore
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={tw`text-xl font-semibold text-center`}>
                Register
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`w-1/2 h-full rounded-2xl flex justify-center bg-slate-100`}
              // @ts-ignore
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text
                style={tw`text-xl text-center font-semibold text-[#17CBB7]`}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={tw`w-full rounded-lg mt-8 flex justify-center`}
            // @ts-ignore
            onPress={() => navigation.navigate('Home')}
          >
            <Text
              style={tw`text-lg text-gray-400 underline text-center font-semibold`}
            >
              Continue as a Guest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
