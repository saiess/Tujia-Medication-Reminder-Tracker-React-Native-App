import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';

let baseUrl = 'https://www.breakingbadapi.com/api/characters/';
const ShowData = () => {
      const [medication, setMedication] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
      const [hasError, setErrorFlag] = useState(false);

      useEffect(() => {
            const fetchData = async () => {
                    setIsLoading(true);
                    setErrorFlag(false);
                    try {
                            const response = await axios.get(baseUrl);
                            setMedication(response.data);
                            // console.warn(response.data[0].name);
                    } catch (error) {
                            setErrorFlag(true);
                    }
                    setIsLoading(false);
            }
            fetchData();
        }, []);
  return (
    <View
      style={tw`w-full h-full rounded-l-xl bg-slate-200 flex items-center justify-center`}
    >
      <FlatList
        data={medication}
        renderItem={({ item }) => (
          // @ts-ignore
          <TouchableOpacity
            style={tw`w-full h-16 rounded-lg mt-8 flex flex-row bg-slate-50 shadow-sm items-center`}
            // @ts-ignore
            onPress={() => navigation.navigate('ShowData')}
          >
            <View style={tw`w-16 h-full rounded-l-xl bg-slate-700`} />
            <Text style={tw`text-base font-semibold ml-6`}>{item.name}</Text>
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
