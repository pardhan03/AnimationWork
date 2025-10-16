import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { useLinkBuilder } from '@react-navigation/native';
import BottomTabIcon from './BottomTabIcon'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
const CustomBottomTab = ({ state, descriptors, navigation }) => {
    // console.log(state, descriptors, 'these props are coming from the tabbar props of the tab navigator');
    const { buildHref } = useLinkBuilder();
    const { width } = useWindowDimensions();
    const MARGIN =20;
    const TAB_BAR_WIDHT = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDHT/state?.routes?.length;

    const translateAnimation = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring( TAB_WIDTH * state?.index )}]
        }
    })

    return (
        <View style={[styles.tabBarContainer, { width: TAB_BAR_WIDHT, bottom:  MARGIN }]}>
            <Animated.View style={[styles.slidingTabContainer, { width: TAB_WIDTH }, translateAnimation ]}>
                <View style={styles.slidingTab} />
            </Animated.View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.contentContainer}>
                            <BottomTabIcon name={route?.name} isFocused={isFocused}/>
                            <Text style={{ color: isFocused ? "#0067ff" : "#ffff", fontSize: 12 }}>
                            {route.name}
                        </Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    )
}

export default CustomBottomTab

const styles = StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 90,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: "#0067FF",
        width: '100%',
        borderRadius: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    slidingTab: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#ffff',
    },
    slidingTabContainer: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center',
    }
})