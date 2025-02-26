import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Heart } from '@/src/components/atoms/heart'
import { ReactElement } from 'react'
import styles from "./detailWrapperStyles"
function DetailWrapper({children}:{children:ReactElement}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <MaterialIcons style={styles.arrowIcon} name="arrow-left" size={30} color="black" />
      <Text style={styles.headerText}>Product</Text>
      <View>
       <Heart />
      </View>
    </View>
    <View style={{height: "100%"}}>
      {children}
    </View>
  </SafeAreaView>
  )
}

export default DetailWrapper