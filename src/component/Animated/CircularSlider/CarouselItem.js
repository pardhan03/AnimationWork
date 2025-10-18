import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get("screen");
const _itemSize = width * .24;
const _spacing = 12;


const CarouselItem = ({ imageUri, index, scrollX }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
        // borderWidth:4,
        // borderColor: interpolateColor(
        //     scrollX?.value,
        //     [index-1, index, index+1],
        //     ["red", "white", "red"]
        // ),
        transform: [{
            translateY: interpolate(
                scrollX?.value,
                [index-1, index, index+1],
                [_itemSize/3, 0, _itemSize/3]
            )
        }]
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image
        src={imageUri}
        style={{
            width: _itemSize,
            height: _itemSize,
            borderRadius: _itemSize/2,
        }}
      />
    </Animated.View>
  )
}

export default CarouselItem

const styles = StyleSheet.create({
    container: {
        width: _itemSize,
        height: _itemSize,
        borderRadius: _itemSize/2,
    }
})