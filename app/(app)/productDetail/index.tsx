import { Text, View } from "react-native"
import styles from "./productStyles"
import DetailWrapper from "@/src/components/organisms/PageThemeWrapper/DetailWrapper/DetailWrapper"
import Image from "@/src/components/atoms/Image/Image"
import { ProductItemCard } from "@/src/components/atoms/ProductItemCard"
import { useRouter } from "expo-router"

function ProductDetail() {
  const router = useRouter()
  const handleItemClick =()=>{
    router.push("/(app)/productDetail/detail")
  }
  return (
    <DetailWrapper>
      <View style={styles.containerS}>
        <View style={styles.leftBar}>
          <View style={styles.gradingContainer}>
            <View style={styles.gradingImage}>
              {/* <Image source={require("@/src/assets/images/icon.png")} /> */}
            </View>
            <Text>AAA</Text>
          </View>
          <View style={styles.gradingContainer}>
            <View style={styles.gradingImage}>
              {/* <Image source={require("@/src/assets/images/icon.png")} /> */}
            </View>
            <Text>AAA</Text>
          </View>
        </View>
        <View style={styles.rightBar}>
          <ProductItemCard itemClick={handleItemClick} imageStyle={styles.productImage} productLabel="Potato" price="25/kg" />
          <ProductItemCard imageStyle={styles.productImage} productLabel="Potato" price="25/kg" />
        </View>
      </View>
    </DetailWrapper>
  )
}

export default ProductDetail