import { Pressable, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withSpring, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { mockFeatures } from '../utils/constant';

const Search = ({ route }) => {
  const item = route?.params?.item;
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const backButtonScale = useSharedValue(1);

  const backButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: backButtonScale.value }]
  }));

  const imageSource = item?.image
    ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
    : null;

  const handlePress = () => {
    backButtonScale.value = withSpring(0.8, { duration: 100 }, () => {
      backButtonScale.value = withSpring(1, { duration: 100 });
    });
    navigation?.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
      <Animated.View
        style={[styles.header, { paddingTop: insets.top + 10 }]}
        entering={FadeInUp.delay(300)}
      >
        <Animated.View style={[backButtonAnimatedStyle]}>
          <Pressable
            onPress={handlePress}
            style={styles.backButton}
          >
            <Image src={'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'} style={styles.backButtonImage} />
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={imageSource}
            style={[
              styles.image,
              {
                height: width * 0.85
              }
            ]}
          />
          <Animated.View
            style={styles.overlayContainer}
            entering={FadeInUp.delay(400).duration(600)}
          >
            <Animated.Text style={styles.title}>
              {item?.name}
            </Animated.Text>
            <Animated.Text style={styles.location}>
              {item?.location}
            </Animated.Text>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.contentContainer}
          entering={FadeInUp.delay(500).duration(800)}
        >
          <Text style={styles.aboutTitle}>About</Text>
          <Text numberOfLines={2} style={styles.about}>{item?.about}</Text>
          <View style={styles.featureContainer}>
            {mockFeatures.map((feature, index) => (
              <Animated.View
                key={index}
                style={styles.feature}
                entering={ZoomIn.delay(300 * index)}
              >
                <Animated.Image
                  source={{ uri: feature.icon }}
                  style={styles.featureIcon}
                  entering={ZoomIn}
                />
                <Text style={styles.featureText}>{feature?.title}</Text>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 20
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonImage: {
    height: 18,
    width: 18,
    marginRight: 6,
    marginTop: 4
  },
  backButtonText: {
    fontSize: 16,
    color: "#2d2426",
    fontWeight: '600'
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  overlayContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  aboutTitle: {
    fontSize: 24,
    color: "#2d3436",
    fontWeight: 'bold',
    marginBlock: 12,
  },
  about: {
    fontSize: 16,
    color: "#636e72",
    marginBlock: 24,
    lineHeight: 24,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  feature: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: "#f1f2f6",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginBottom: 0,
    borderRadius: 100
  },
  featureText: {
    fontSize: 14,
    color: "#2d3436",
    fontWeight: "500",
    textAlign: 'center',
  }
})