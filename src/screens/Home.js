import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mockData } from '../utils/constant'
import VerticalList from '../component/Animated/AnimatedVerticalList/VerticalList'

const Home = () => {
  return (
    <View>
       <VerticalList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})