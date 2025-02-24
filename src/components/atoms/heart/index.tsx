import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export const Heart = ({
  heartStyle,
  width = 24,
  height = 30
}: {
  heartStyle?: StyleProp<ViewStyle>
  width?: number
  height?: number
}) => {
  return (
    <View style={[styles.container, { width: width * 2, height: height }]}>
      <View 
        style={[
          styles.left, 
          styles.heart, 
          heartStyle, 
          {
            width: width, 
            height: height, 
            borderTopRightRadius: width/2, 
            borderTopLeftRadius: width/2 
          }
        ]}
      />
      <View 
        style={[
          styles.right, 
          styles.heart, 
          heartStyle, 
          {
            width: width, 
            height: height, 
            borderTopRightRadius: width/2, 
            borderTopLeftRadius: width/2 
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heart: {
    backgroundColor: "red",
    position: "absolute",
  },
  right: {
    transform: [{ rotate: "50deg" }],
    left: "50%",
  },
  left: {
    transform: [{ rotate: "-50deg" }],
    left: "30%", 
  },
});