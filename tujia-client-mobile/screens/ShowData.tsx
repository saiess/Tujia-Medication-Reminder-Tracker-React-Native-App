import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
let baseUrl = 'http://192.168.1.3:4000/medications/';
const ShowData = () => {
  const [medication, setMedication] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  const splitMedicationName = (p: string) => {
    let vv = p.replaceAll(',', ' ');
    return vv.split(' ').slice(0, 2).join(' ').toLowerCase();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setErrorFlag(false);
      try {
        const response = await axios.get(baseUrl);
        setMedication(response.data);
        console.log(response.data[0].name);
      } catch (error) {
        setErrorFlag(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <View
      style={tw`w-full h-full rounded-l-xl bg-slate-200 flex items-center justify-center`}
    >
      <FlatList
        data={medication}
        renderItem={({ item, index }) => (
          // @ts-ignore
          <TouchableOpacity
            style={tw`w-full h-16 rounded-lg mt-8 flex flex-row bg-slate-50 shadow-sm items-center`}
            // @ts-ignore
            onPress={() => navigation.navigate('ShowData')}
            key={index}
          >
            <View style={tw`w-16 h-full rounded-l-xl bg-slate-700`} />
            <Text style={tw`text-base font-semibold ml-6`}>
              {splitMedicationName(item.name)}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 0 }}
        // horizontal={true}
      />
    </View>
  );
};

export default ShowData;
