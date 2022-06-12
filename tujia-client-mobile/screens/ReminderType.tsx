import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import BottomStatusBar from '../components/BottomStatusBar';

const RemiderType = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E4EEF3]`}>
      <Text style={tw`text-gray-700 font-bold text-xl px-6 py-4`}>
        How often should i remind you to take your medication:
      </Text>
      <View style={tw`flex-1`}>
        <Text style={tw`ml-6 mt-4 text-sm`}>Select your choice:</Text>
        <View style={tw`flex items-center`}>
          <TouchableOpacity
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50`}
            // @ts-ignore
            onPress={() => navigation.navigate('Schedule')}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Daily</Text>
            <Text style={tw`text-xs ml-6 text-[#17CBB7]`}>
              take dose every day
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50 shadow-sm`}
            // @ts-ignore
            onPress={() => navigation.navigate('ReminderType')}
          >
            <Text style={tw`text-base font-semibold ml-6`}>
              One particular day pf the week
            </Text>
            <Text style={tw`text-xs ml-6 text-[#17CBB7]`}>
              take dose on selected days
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50 shadow-sm`}
            // @ts-ignore
            onPress={() => navigation.navigate('ReminderType')}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Every x day</Text>
            <Text style={tw`text-xs ml-6 text-[#17CBB7]`}>
              interval in days
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50 shadow-sm`}
            // @ts-ignore
            onPress={() => navigation.navigate('ReminderType')}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Every x hour</Text>
            <Text style={tw`text-xs ml-6 text-[#17CBB7]`}>
              interval in hours
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50 shadow-sm`}
            // @ts-ignore
            onPress={() => navigation.navigate('ReminderType')}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Once</Text>
            <Text style={tw`text-xs ml-6 text-[#17CBB7]`}>
              for a single day of the week
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex items-center`}>
        <BottomStatusBar />
      </View>
    </SafeAreaView>
  );
};

export default RemiderType;
