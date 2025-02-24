import { StyleSheet, View } from 'react-native'
import Image from '@/src/components/atoms/Image/Image'
import { useRouter } from 'expo-router';

function index() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/(app)/dashboard");
  }, 5000);
  return (
    <View style={styles.container}>
      <Image 
        style={styles.spiral}
        source={require("@/src/assets/images/spiral.png")}
      />
      <View style={styles.farmerContainer}>
        <Image 
          style={styles.farmer}
          source={require("@/src/assets/images/farmer_pic.png")}
        />
      </View>
      <View style={styles.spiralBottom}>
        <Image 
          style={styles.spiral}
          source={require("@/src/assets/images/spiral_bottom.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  spiral: {
    width: 316,
    height: 316,
  },
  spiralBottom: {
    display: "flex",
    alignItems: "flex-end"
  },
  farmerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  farmer: {
    width: "100%",
    height: "100%",
  }
})
export default index;

