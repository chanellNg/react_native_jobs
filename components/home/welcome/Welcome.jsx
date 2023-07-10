import React from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Chanell</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value=""
            onChange={()=> {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity 
          style={styles.searchBtn}
          onPress={()=> {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Show Jobs */}
      <View style={styles.tabsContainer}>
        {/* Use flatlist when there is more data to render */}
        <FlatList>

        </FlatList>

      </View>
    </View>
  )
}

export default Welcome