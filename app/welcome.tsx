import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
  return (
    <SafeAreaView className='bg-yellow-950 flex-1'>
      <View className='h-[60%] w-full'>
        {/* Marquee component */}
        <ScrollView horizontal>
          {events.map((event) => (
            <View className='h-full w-96 p-5' key={event.id}>
              <Image source={event.image} className='h-full w-full rounded-3xl'/>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className='gap-4 p-4 flex-1 justify-center'>
        <Text className='text-center text-2xl font-bold text-white/60'>Welcome to</Text>
        <Text className='text-5xl text-center font-bold text-white'>Apple Invites</Text>
        <Text className='text-white text-center text-lg text-white/60 mb-5'>
          Create beautiful invitations for your events. Anyone can receive invitations. Sending included with iCloud+
        </Text>

        <TouchableOpacity 
          className='bg-white py-4 px-10 rounded-full items-center self-center'
          onPress={() => console.log('create an event...')}
        >
          <Text className='text-lg'>Create an Event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}