import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mockPlaces } from '../utils/constant'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Renderitem from '../component/Animated/ShareElement/RenderItem'

const Home = () => {
  return (
    <View>
      <View>
        <Animated.Text
          style={styles.text}
          entering={FadeInDown.delay(200).duration(600)}
        >
          Popular Destinations
        </Animated.Text>
      </View>
        <FlatList
        data={mockPlaces}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Renderitem index={index} item={item}/>}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 30,
    color: '#323232',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  scrollContainer: {
    gap: 10
  }
})
