import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button
} from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import SearchMeds from '../components/AddMeds/SearchMeds';
import { useNavigation } from '@react-navigation/native';
import BottomStatusBar from '../components/BottomStatusBar';
import RNPickerSelect from 'react-native-picker-select';

const Schedule = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#E4EEF3]`}>
      <Text style={tw`text-gray-700 font-bold text-xl px-6 py-4`}>
        At what time should i remind you:
      </Text>
      <View style={tw`flex-1`}>
        <Text style={tw`ml-6 mt-4 text-sm`}>Select your choice:</Text>
        <View style={tw`flex items-center`}>
          <View
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50`}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Time</Text>
          </View>

          <View
            style={tw`w-4/5 h-16 rounded-lg px-6 pt-2 mt-8 flex justify-center bg-slate-50 shadow-sm`}
          >
            <Text style={tw`text-base font-semibold`}>Unit(s)</Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>

          <View
            style={tw`w-4/5 h-16 rounded-lg mt-8 flex justify-center bg-slate-50 shadow-sm`}
          >
            <Text style={tw`text-base font-semibold ml-6`}>Quantity</Text>
            <TextInput
              placeholder="1"
              style={tw`text-xs ml-6 font-semibold`}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={tw`flex items-center`}>
        <BottomStatusBar />
      </View>
    </SafeAreaView>
  );
};

export default Schedule;
