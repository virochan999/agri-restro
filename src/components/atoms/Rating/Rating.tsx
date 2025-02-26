import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

function Rating({
  handleStarPress,
  rating,
}:{
  handleStarPress: (val:number) => void,
  rating: number
}) {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={index} onPress={()=>handleStarPress(index+1)}>
          <MaterialIcons name="star" size={24} color={index < rating ? "yellow" :"black"} />
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  }
})
export default Rating