import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function welcome() {
  return (
    <SafeAreaView className='bg-yellow-950 flex-1'>
      <View className='bg-gray-400 h-[60%] w-full'>
        {/* Marquee component */}
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