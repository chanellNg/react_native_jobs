import { View, Text } from 'react-native';
import { NearbyJobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';

const Home = () => {
    const router = useRouter();
    return (
        /* SafeAreaView renders content within safe area boundaries of a device
            reflects portion of view not covered by navigation bars etc. */
        <SafeAreaView style= {{
            flex:1, 
            backgroundColor: COLORS.lightWhite
        }}>
            <Stack.Screen 
                options={{
                    // headerStyle takes in an object
                    headerStyle: {backgroundColor: COLORS.lightWhite}
                }}/>
        </SafeAreaView>
    )
}

export default Home;