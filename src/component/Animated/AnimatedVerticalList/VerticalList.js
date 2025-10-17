import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { mockData } from '../../../utils/constant';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height } = Dimensions.get("screen");
const _spacing = 8;
const _itemSize = height * 0.72;
const _itemFullSize = _itemSize + _spacing * 2;

const VerticalList = () => {

  const scrollY = useSharedValue();

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y/_itemFullSize;
  })

  const AnimatedCard = ({ item, index, scrollY }) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY?.value,
                [index -1, index , index+1],
                [0.5, 1, 0.5]
            ),
            transform: [{
                scale: interpolate(
                scrollY?.value,
                [index -1, index , index+1],
                [0.50, 1, 0.50]
            )
            }]
        }
    })
    return (
      <Animated.View style={[styles.cardContainer, animatedStyle ]}>
        <Image
          source={{ uri: item?.image}}
          style={styles.absoluteFillImage}
          blurRadius={50}
        />
        <Image
          source={{ uri: item?.image}}
          style={styles.mainImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item?.title}</Text>
          <Text style={styles.descriptionText} numberOfLines={3}>{item?.description}</Text>
        </View>
        <View style={styles.authorContainer}>
          <Image
            source={{
              uri: item?.author?.avatar,
            }}
            style={styles.authorAvatar}
          />
          <Text style={styles.authorNameText}>{item?.author?.name}</Text>
        </View>
      </Animated.View>
    )
  }

  return (
    <View>
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        data={mockData}
        renderItem={({ item, index }) => (
            <AnimatedCard
                key={`item?.id`}
                item={item}
                index={index}
                scrollY={scrollY}
            />
        )}
        // Apply styles.contentContainer
        contentContainerStyle={styles.contentContainer}
        snapToInterval={_itemFullSize}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  )
}

export default VerticalList

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        height: _itemSize,
        padding: _spacing * 2,
        borderRadius: 8,
        gap: _spacing,
    },
    absoluteFillImage: {
        ...StyleSheet.absoluteFillObject, // Use the spread operator for convenience
        borderRadius: 8,
    },
    mainImage: {
        flex: 1,
    },
    textContainer: {
        gap: _spacing,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
    },
    descriptionText: {
        color: "#ddd",
    },
    authorContainer: {
        flexDirection: 'row',
        gap: _spacing,
        alignItems: 'center',
    },
    authorAvatar: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 12,
    },
    authorNameText: {
        fontSize: 12,
        color: "#ddd",
    },
    contentContainer: {
        paddingHorizontal: _spacing * 1,
        paddingVertical: (height - _itemFullSize) / 4,
    },
})