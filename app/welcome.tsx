import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const events = [
  {
    id: 1,
    image: require('../assets/images/1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/4.jpg'),
  },
  {
    id: 5,
    image: require('../assets/images/5.jpg'),
  },
  {
    id: 6,
    image: require('../assets/images/6.jpg'),
  },
  {
    id: 7,
    image: require('../assets/images/7.jpg'),
  },
  {
    id: 8,
    image: require('../assets/images/8.jpg'),
  },
]

export default function welcome() {

  const [activeIndex, setActiveIndex] = useState(0)

  const onButtonPress = () => {
    setActiveIndex(activeIndex >= events.length - 1 ? 0 : activeIndex + 1)
    console.log('create an evjent...')
  }

  return (
    <View className='flex-1'>
      <Animated.Image
        key={events[activeIndex].image}
        source={events[activeIndex].image} 
        className='absolute top-0 left-0 h-full w-full' 
        resizeMode='cover'
        entering={FadeIn.duration(1500)}
        exiting={FadeOut.duration(1500)}
      />
      <View className='absolute top-0 left-0 h-full w-full bg-black/50'/>

      <BlurView intensity={100} className='flex-1'>
        <SafeAreaView>
          <View className='h-[64%] w-full'>
            {/* Marquee component */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {events.map((event) => (
                <View className='h-full w-96 p-5' key={event.id}>
                  <Image source={event.image} className='h-full w-full rounded-3xl'/>
                </View>
              ))}
            </ScrollView>
          </View>

          <View className='gap-4 p-4 justify-center'>
            <Text className='text-center text-2xl font-bold text-white/60'>Welcome to</Text>
            <Text className='text-5xl text-center font-bold text-white'>Apple Invites</Text>
            <Text className='text-white text-center text-lg text-white/60 mb-5'>
              Create beautiful invitations for your events. Anyone can receive invitations. Sending included with iCloud+
            </Text>

            <TouchableOpacity 
              className='bg-white py-4 px-10 rounded-full items-center self-center'
              onPress={onButtonPress}
            >
              <Text className='text-lg'>Create an Event</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  )
}