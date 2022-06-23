import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/core';
import BottomStatusBar from '../components/BottomStatusBar';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

const Schedule = ({ route, navigation }: any) => {
  const { medication } = route.params;
  let baseUrl = 'http://192.168.1.3:4000/schedule/';
  const [time, setTime] = useState<string>('');
  const [qountity, setQountity] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
    const navigating = useNavigation();

  const SaveData = () => {
    const data = {
      time: time,
      quantity: qountity,
      unit: unit,
      name: medication,
    };
    console.log(data);

    axios
      .post(baseUrl, data)
      .then(function (response) {
        console.log(response);
        // @ts-ignore
        navigating.navigate('Home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const height = Dimensions.get('window').height;
  return (
    <SafeAreaView
      style={{
        height: height,
        paddingBottom: 36,
        backgroundColor: '#E4EEF3',
      }}
    >
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
            <TextInput
              placeholder="Time"
              style={tw`text-xs ml-6 font-semibold`}
              keyboardType="numeric"
              onChangeText={(text) => setTime(text)}
              defaultValue={time}
            />
          </View>

          <View
            style={tw`w-4/5 h-16 rounded-lg px-6 pt-2 mt-8 flex justify-center bg-slate-50 shadow-sm`}
          >
            <Text style={tw`text-base font-semibold`}>Unit(s)</Text>
            <RNPickerSelect
              onValueChange={(value) => setUnit(value)}
              items={[
                { label: 'pill', value: 'pill' },
                { label: 'injection', value: 'injection' },
                { label: 'synergy', value: 'synergy' },
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
              onChangeText={(text) => setQountity(text)}
              defaultValue={qountity}
            />
          </View>

          <View
            style={tw`w-4/5 h-1/2 rounded-lg mt-8 flex justify-center items-center`}
          >
            <TouchableOpacity
              style={tw`w-3/5 h-12 rounded-3xl mt-8 flex justify-center bg-[#17CBB7] shadow-sm`}
              // @ts-ignore
              onPress={() => SaveData()}
            >
              <Text style={tw`text-lg text-gray-800 text-center font-semibold`}>
                Save Medication
              </Text>
            </TouchableOpacity>
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
