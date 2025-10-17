import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const RenderItem = ({ index, item }) => {
  const navigation = useNavigation();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  const handlePress = () => {
    navigation?.navigate("Search", { item });
  }

  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 150})
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 150})
  };

  return (
    <Animated.View style={[animatedStyle]}>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.container}
      >
        <Animated.Image
          source={item?.image}
          style={styles.image}
          resizeMode={'cover'}
        />
        <View style={styles.textContainer}>
          <Animated.Text style={styles.name}>
            {item?.name}
          </Animated.Text>
          <Animated.Text style={styles.location}>
            {item?.location}
          </Animated.Text>
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
    paddingVertical: 8
  },
  name: {
    color: "#323232",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  location: {
    color: "#666",
    fontSize: 16,
  }
})