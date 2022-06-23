import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import SearchMeds from '../components/AddMeds/SearchMeds';
import { useNavigation } from '@react-navigation/native';
import BottomStatusBar from '../components/BottomStatusBar';
import axios from 'axios';

const AddMeds = () => {
  const splitMedicationName = (medName: string) => {
    let medNameWithoutCommma = medName.replaceAll(',', ' ');
    return medNameWithoutCommma.split(' ').slice(0, 2).join(' ').toLowerCase();
  };
  let baseUrl = 'http://192.168.1.3:4000/medications/';
  const [medication, setMedication] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  const navigation = useNavigation();
  const height = Dimensions.get('window').height;

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setErrorFlag(false);
        try {
          const response = await axios.get(baseUrl);
          setMedication(response.data);
        } catch (error) {
          setErrorFlag(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, []);

    
  const medicationArr = medication
    ? medication.map((item: any) => item.name)
    : [];
  const [search, setSearch] = useState(medicationArr);

  // ** search method **
  const searchMeds = (value: any) => {
      if (!value.length) return setSearch(medicationArr);
      const filteredMed = medicationArr.filter((item: string) => item.includes(value.toLowerCase()));
      if(filteredMed.length) {
        setSearch(filteredMed);
      }else {
        setSearch(medicationArr);
      }
  }
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
        <SearchMeds onSearch={searchMeds} />

        <View style={tw`flex-1`}>
          <Text style={tw`ml-6 mt-4 text-sm`}>Search Results:</Text>
          <View style={tw`flex items-center`}>
            <FlatList
              data={medicationArr}
              renderItem={({ item, index }) => (
                // @ts-ignore
                <TouchableOpacity
                  style={tw`w-full h-16 rounded-lg mt-8 flex flex-row bg-slate-50 shadow-sm items-center`}
                  // @ts-ignore
                  onPress={() => navigation.navigate('ReminderType', {
                    medication: item,
                    })}
                  key={index}
                >
                  <View style={tw`w-16 h-full rounded-l-xl bg-slate-700`}>

                  </View>
                  <Text style={tw`text-base font-semibold ml-6`}>
                    {splitMedicationName(item)}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingTop: 0 }}
            />
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
