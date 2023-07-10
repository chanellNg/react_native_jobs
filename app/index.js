import { View, Text } from 'react-native';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'; // library similar to react router
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, SIZES, images  } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
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
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: "" // remove default index title in middle of header
                }}
                />

                <ScrollView showsVerticalScrollIndicator={false}/>
                    <View 
                        style = {{
                            flex: 100,
                            padding: SIZES.medium
                        }}
                    >
                        <Welcome />
                        <Popularjobs />
                        <Nearbyjobs />
                    </View>

        </SafeAreaView>
    )
}

export default Home;