import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import SearchMeds from '../components/AddMeds/SearchMeds';
import { useNavigation } from '@react-navigation/native';
import BottomStatusBar from '../components/BottomStatusBar';

const AddMeds = () => {
    const navigation = useNavigation();
    const height = Dimensions.get('window').height;
    return (
      <>
        <SafeAreaView
          style={{
            height: height,
            paddingBottom: 36,
            backgroundColor: '#E4EEF3',
          }}
        >
          <View style={tw`w-full mt-4 flex flex-row justify-end`}>
            <Text style={tw`text-[#17CBB7] font-bold text-xl mr-20`}>
              ADD MEDICATION
            </Text>
            <TouchableOpacity>
              {/* @ts-ignore */}
              <AntDesign
                name="closecircleo"
                size={24}
                color="black"
                style={tw`mr-4`}
                // @ts-ignore
                onPress={() => navigation.navigate('Home')}
              />
            </TouchableOpacity>
          </View>
          <Text style={tw`text-gray-700 font-bold text-xl px-6 py-4`}>
            Please enter the name of your medication:
          </Text>
          <SearchMeds />
          <View style={tw`flex-1`}>
            <Text style={tw`ml-6 mt-4 text-sm`}>Search Results:</Text>
            <View style={tw`flex items-center`}>
              <TouchableOpacity
                style={tw`w-4/5 h-16 rounded-lg mt-8 flex flex-row bg-slate-50 shadow-sm items-center`}
                // @ts-ignore
                onPress={() => navigation.navigate('ReminderType')}
              >
                <View style={tw`w-16 h-full rounded-l-xl bg-slate-700`} />
                <Text style={tw`text-base font-semibold ml-6`}>
                  Medication Name
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={tw`w-4/5 h-16 rounded-lg mt-8 flex flex-row bg-slate-50 shadow-sm items-center`}
                // @ts-ignore
                onPress={() => navigation.navigate('ShowData')}
              >
                <View style={tw`w-16 h-full rounded-l-xl bg-slate-700`} />
                <Text style={tw`text-base font-semibold ml-6`}>
                  show data test
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`flex items-center`}>
            <BottomStatusBar />
          </View>
        </SafeAreaView>
      </>
    );
};

export default AddMeds;
