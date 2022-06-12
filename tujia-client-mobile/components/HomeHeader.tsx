import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import tw from 'twrnc';

const HomeHeader = () => {
  return (
    <View
      style={tw`w-full h-20 flex flex-row items-center justify-between px-4`}
    >
      <View style={tw`flex flex-row w-1/2 justify-evenly`}>
        {/* @ts-ignore */}
        <MaterialCommunityIcons
          name="face-man-profile"
          size={44}
          color="black"
        />
        <View>
          <Text>Welcome</Text>
          <Text style={tw`text-xl font-bold`}>Said Essalami</Text>
        </View>
      </View>
      <TouchableOpacity>
        {/* @ts-ignore */}
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeHeader