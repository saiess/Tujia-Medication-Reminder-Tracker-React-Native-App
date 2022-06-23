import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const SearchMeds = ({onSearch}: any) => {
  return (
    <View style={tw`mt-2 flex items-center`}>
      <View
        style={tw`w-11/12 rounded-md flex flex-row items-center px-2 py-1 bg-slate-50 shadow-sm`}
      >
        <TextInput
          placeholder="Search Medication"
          style={tw`flex-1 p-3 w-4/5`}
          onChangeText={onSearch}
        />
        {/* @ts-ignore */}
        <AntDesign name="search1" size={28} color="#17CBB7" />
      </View>
    </View>
  );
};

export default SearchMeds