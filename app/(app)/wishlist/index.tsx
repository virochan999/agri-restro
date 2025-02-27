import { ProductItemCard } from "@/src/components/atoms/ProductItemCard";
import DetailWrapper from "@/src/components/organisms/PageThemeWrapper/DetailWrapper/DetailWrapper";
import { Colors } from "@/src/constants/Colors";
import { ScrollView, StyleSheet, View } from "react-native";

function whishList() {
  const handleAddToCart = ()=>{

  }
  return (
    <DetailWrapper searchIcon heading="Wishlist" backNevigation={false}>
      <ScrollView >
        <View style={styles.wishList}>
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
          <ProductItemCard itemStyle={styles.wishListItem} productLabel="Potato" price="23/kg" />
        </View>
      </ScrollView>
    </DetailWrapper>
  )
}

const styles = StyleSheet.create({
  wishList: {
    paddingBlock: 15,
    paddingInline: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  wishListItem: {
    backgroundColor: Colors.white
  }
})
export default whishList;