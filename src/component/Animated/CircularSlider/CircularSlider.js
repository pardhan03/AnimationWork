import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarouselItem from './CarouselItem'
import { CircularSliderImageData } from '../../../utils/constant'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

const { width } = Dimensions.get("screen");
const _itemSize = width * .24;
const _spacing = 12;
const _itemToalSize = _itemSize + _spacing;

const CircularSlider = () => {
    const scrollX = new useSharedValue(0);
    const onScroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x / _itemToalSize;
    });

    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFill]}>
                <Image style={{ flex:1 }} src={'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'} />
            </View>
            <Animated.FlatList
                data={CircularSliderImageData}
                key={(index) => index}
                renderItem={({ item, index }) => {
                    return <CarouselItem imageUri={item} index={index} scrollX={scrollX} />
                }}
                style={styles.scrollContainerStyle}
                contentContainerStyle={styles.scrollAnimatedContainerStyle}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                snapToInterval={_itemToalSize}
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default CircularSlider

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 120
    },
    scrollContainerStyle: {
        flexGrow: 0,
    },
    scrollAnimatedContainerStyle: {
        paddingHorizontal: (width - _itemSize) / 2,
        gap: _spacing
    }
})