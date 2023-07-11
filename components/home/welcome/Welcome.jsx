import React, { useState } from 'react';
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

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  // usestate active job type so that the correct job type list element will be highlighted
  const [activeJobType, setActiveJobType] = useState('Full-time');

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
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => {
            {/* Each list item is a button which is clickable */}
            
            return <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={()=> {
                // set active job type so that the list item will be highlighted
                setActiveJobType(item);
                // search function for job type
                router.push(`/search/${item}`);
              }}
              >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          }}
          keyExtractor={item => item} // extracts unique key
          contentContainerStyle={{columnGap: SIZES.small}} // space between horizontal list elements else sidebyside
          horizontal // layout list elements horizontally
        />

      </View>
    </View>
  )
}

export default Welcome