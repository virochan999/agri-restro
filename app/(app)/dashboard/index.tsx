import { ScrollView, Text, View } from "react-native";
import BasketWrapper from "@/src/components/organisms/PageThemeWrapper/Basket/BasketWrapper";
import styles from "./dashboardStyle";
import { BasketCard } from "@/src/components/atoms/BasketCard";
import { Link, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import { ProductItemCard } from "@/src/components/atoms/ProductItemCard";
import { useRouter } from "expo-router";
import { useProductStore } from "@/src/store/useProductStore";
import { useFetchProducts } from "@/src/hooks/useFetchProducts";

const Home = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const router = useRouter();
  const products = useProductStore((state) => state.products);
  const { isLoading, error } = useFetchProducts();

  const handleAddToCart = () => {
    console.log("-------working----------");
  };

  const carouselItems = [
    {
      imageSrc: require("@/src/assets/images/fruit_basket.png"),
      heading: "Buy fresh veggies at just",
      btnText: "Shop Now",
    },
    {
      imageSrc: require("@/src/assets/images/fruit_basket.png"),
      heading: "Get 50% off on first order",
      btnText: "Order Now",
    },
    {
      imageSrc: require("@/src/assets/images/fruit_basket.png"),
      heading: "Fresh fruits delivered fast",
      btnText: "Explore",
    },
  ];

  return (
    <BasketWrapper>
      <View>
        <View style={styles.topContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={350}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            {carouselItems.map((item, index) => (
              <View
                key={index}
                style={{ marginHorizontal: 5 }}
              >
                <BasketCard
                  imageSrc={item.imageSrc}
                  heading={item.heading}
                  btnText={item.btnText}
                  containerStyle={{ width: 340 }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainHeading}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Recommended
            </Text>
            <Link href="/dashboard">SHOW ALL</Link>
          </View>
          {products.length === 0 ? (
            <Text>No products available</Text>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {products.map((product) => (
                <ProductItemCard
                  key={product.id}
                  addToCart={handleAddToCart}
                  productLabel={product.name}
                  label={product.label}
                  price={product.price}
                  imageSrc={product.image}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </BasketWrapper>
  );
};

export default Home;
