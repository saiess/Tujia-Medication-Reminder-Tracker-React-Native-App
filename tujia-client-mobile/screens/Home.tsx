import { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import tw from 'twrnc';

import { COLORS } from '../constants';
import {
  MedCard,
  HomeHeader,
  FocusedStatusBar,
  BottomStatusBar,
} from '../components';
import axios from 'axios';

const Home = () => {
  let baseUrl = 'http://192.168.1.3:4000/schedule/';
  const [meds, setMeds] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(function (response) {
        console.log(response);
        setMeds(response.data);
      }
      )
      .catch(function (error) {
        console.log(error);
      }
      );
  }, []);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* @ts-ignore */}
      <FocusedStatusBar background={COLORS.primary} />

      <View style={tw`flex-1 bg-[#E4EEF3]`}>
        <View style={tw`z-10 pb-3`}>
          <View>
            <HomeHeader />
          </View>
          <Text style={tw`font-semibold text-xl mt-6 ml-4`}>
            Recent Medacations
          </Text>
          <FlatList
            data={meds}
            renderItem={({ item, index }) => (
              // @ts-ignore
              <MedCard data={item} />
            )}
            // @ts-ignore
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 0 }}
            horizontal={true}
          />
        </View>
        <View style={tw`bg-slate-50 flex-1 rounded-t-3xl`}>
          <View style={tw`mt-2 flex items-center`}>
            <Text style={tw`text-center text-lg text-[#17CBB7] font-bold`}>
              00 Month 2022
            </Text>
            <View
              style={tw`w-full flex justify-around flex-row h-16 pt-2 pl-2`}
            >
              <View style={tw`w-10 h-10 bg-[#17CBB7] rounded-md py-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>MON</Text>
                <Text style={tw`text-center`}>6</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>TUE</Text>
                <Text style={tw`text-center`}>7</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>WED</Text>
                <Text style={tw`text-center`}>8</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>THU</Text>
                <Text style={tw`text-center`}>9</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>FRI</Text>
                <Text style={tw`text-center`}>10</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>SAT</Text>
                <Text style={tw`text-center`}>11</Text>
              </View>
              <View style={tw`w-10 h-10 rounded-md p-1`}>
                <Text style={tw`text-center text-xs font-semibold`}>SUN</Text>
                <Text style={tw`text-center`}>12</Text>
              </View>
            </View>
            <View style={tw`w-full mt-6 flex items-center`}>
              <View
                style={tw`w-4/5 rounded-xl shadow-md bg-[#17CBB7] flex flex-row p-2 mb-4 justify-around`}
              >
                <View
                  style={tw`rounded-full rounded-3xl flex justify-center w-1/4 h-16`}
                >
                  <Image
                    source={require('../assets/images/pill.png')}
                    style={tw`w-4/5 h-12`}
                  />
                </View>
                <View style={tw`flex justify-center`}>
                  <Text style={tw`text-lg font-semibold`}>MED Name</Text>
                  <Text>Dose</Text>
                </View>
                <View style={tw`flex justify-center`}>
                  <Text style={tw`font-semibold`}>10:00 PM</Text>
                </View>
              </View>
              <View
                style={tw`w-4/5 rounded-xl shadow-md bg-[#17CBB7] flex flex-row p-2 mb-4 justify-around`}
              >
                <View
                  style={tw`rounded-full rounded-3xl flex justify-center w-1/4 h-16`}
                >
                  <Image
                    source={require('../assets/images/pill1.png')}
                    style={tw`w-full h-12`}
                  />
                </View>
                <View style={tw`flex justify-center`}>
                  <Text style={tw`text-lg font-semibold`}>MED Name</Text>
                  <Text>Dose</Text>
                </View>
                <View style={tw`flex justify-center`}>
                  <Text style={tw`font-semibold`}>10:00 PM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`w-full flex items-center`}>
        <BottomStatusBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
