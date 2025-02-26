import { Text, View } from "react-native";
import BasketWrapper from "@/src/components/organisms/PageThemeWrapper/Basket/BasketWrapper";
import styles from "./dashboardStyle";
import { BasketCard } from "@/src/components/atoms/BasketCard";
import { Link } from "expo-router";
import { useState } from "react";
import { ProductItemCard } from "@/src/components/atoms/ProductItemCard";
import { useRouter } from "expo-router";

const Home = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const router = useRouter();
  const handleHeartPress = () => {
    setToggleHeart(!toggleHeart);
  };
  const handleAddToCart = () => {
    console.log("-------working----------");
  };
  const handleItemClick =()=>{
    router.push("/(app)/productDetail");
  }
  return (
    <BasketWrapper>
      <View>
        <View style={styles.topContainer}>
          <BasketCard
            imageSrc={require("@/src/assets/images/fruit_basket.png")}
            heading="Buy fresh veggies at just"
            btnText="Shop Now"
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainHeading}>
            <Text>Fresh Picks for the day </Text>
            <Link href="/dashboard">View All</Link>
          </View>
          <ProductItemCard
            addToCart={handleAddToCart}
            toggleHeart={toggleHeart}
            onPress={handleHeartPress}
            itemClick={handleItemClick}
          />
          <ProductItemCard
            addToCart={handleAddToCart}
            toggleHeart={toggleHeart}
            onPress={handleHeartPress}
          />
        </View>
      </View>
    </BasketWrapper>
  );
};

export default Home;
