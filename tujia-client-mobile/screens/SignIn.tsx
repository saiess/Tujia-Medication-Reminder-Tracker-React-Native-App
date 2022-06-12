import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import tw from 'twrnc';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-900 items-center`}>
      <View style={tw`w-11/12 h-20 mt-16 flex justify-center items-center`}>
        <Text style={tw`text-3xl px-10 font-bold text-center text-[#17CBB7]`}>
          Sign In
        </Text>
        <Text
          style={tw`text-sm mt-2 px-10 font-light text-center text-slate-100`}
        >
          please provide the following details.
        </Text>
      </View>
      <View style={tw`flex-1 w-full h-2/5 items-center justify-evenly`}>
        <View style={tw`flex w-full h-60 items-center justify-evenly`}>
          <TextInput
            placeholder="Email"
            style={tw`w-4/5 p-3 bg-slate-300/10 text-slate-100 rounded-xl`}
            placeholderTextColor="#64748b"
            onChangeText={() => {}}
          />
          <TextInput
            placeholder="Password"
            style={tw`w-4/5 p-3 bg-gray-200/10 text-slate-100 rounded-xl`}
            placeholderTextColor="#64748b"
            onChangeText={() => {}}
          />
          <View
            style={tw`flex flex-row items-center w-2/5 bg-slate-50 rounded-2xl`}
          >
            <TouchableOpacity
              style={tw`w-full h-12 rounded-l-2xl rounded-r-2xl flex justify-center bg-[#17CBB7]`}
              // @ts-ignore
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={tw`text-xl font-semibold text-center`}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex items-center w-4/5 rounded-lg`}>
          <View style={tw`flex h-6 mt-8 flex-row`}>
            <Text style={tw`text-base text-slate-100`}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              style={tw`ml-2`}
              // @ts-ignore
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={tw`text-base text-[#17CBB7] font-semibold`}>
                Register!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn