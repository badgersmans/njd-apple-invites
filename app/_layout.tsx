import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="welcome" 
        options={{headerShown: false, presentation: 'fullScreenModal'}}/>
    </Stack>
  )
}