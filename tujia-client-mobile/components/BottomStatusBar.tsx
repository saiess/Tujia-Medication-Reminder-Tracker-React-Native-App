import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native' 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const BottomStatusBar = () => {
  const navigation = useNavigation();
    return (
      <View
        style={tw`bg-gray-800 w-11/12 rounded-lg h-12 flex flex-row justify-between items-center px-3 py-1`}
      >
        <TouchableOpacity>
          {/* @ts-ignore /> */}
          <AntDesign name="menu-unfold" size={26} color="white" />
        </TouchableOpacity>

        {/* @ts-ignore /> */}
        <TouchableOpacity onPress={() => navigation.navigate('AddMeds')}>
          {/* @ts-ignore /> */}
          <AntDesign name="plussquare" size={28} color="white" />
        </TouchableOpacity>

        {/* @ts-ignore /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          {/* @ts-ignore /> */}
          <AntDesign name="home" size={26} color="white" />
        </TouchableOpacity>
      </View>
    );
  }


export default BottomStatusBar;