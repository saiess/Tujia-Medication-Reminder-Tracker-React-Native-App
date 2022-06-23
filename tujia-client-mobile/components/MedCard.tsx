import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const MedCard = ({data}: any) => {
    const splitMedicationName = (medName: string) => {
      let medNameWithoutCommma = medName.replaceAll(',', ' ');
      return medNameWithoutCommma
        .split(' ')
        .slice(0, 2)
        .join(' ')
        .toLowerCase();
    };
  return (
    <View
      style={tw`bg-gray-800 mt-12 ml-4 shadow w-28 h-28 rounded-xl flex items-center justify-end`}
    >
      <Image
        source={require('../assets/images/med.png')}
        style={tw`w-4/5 h-24`}
      />
      <View style={tw`bg-white w-full h-2/5 rounded-lg flex items-center`}>
        <Text style={tw`text-sm font-bold`}>
          {splitMedicationName(data.name)}
        </Text>
        <Text style={tw`text-xs font-light`}>
          {data.quantity} {data.unit} a day
        </Text>
      </View>
    </View>
  );
}

export default MedCard