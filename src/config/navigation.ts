import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export interface TabConfig {
  route: string;
  icon: keyof typeof MaterialIcons.glyphMap | keyof typeof Ionicons.glyphMap;
  iconFamily: 'MaterialIcons' | 'Ionicons';
  label: string;
}

export const TAB_CONFIG: TabConfig[] = [
  {
    route: "/dashboard",
    icon: "home",
    iconFamily: "Ionicons",
    label: "Home"
  },
  { 
    route: "/wishlist",
    icon: "shopping-bag",
    iconFamily: "MaterialIcons",
    label: "Wishlist"
  },
  {
    route: "/productDetail",
    icon: "wallet",
    iconFamily: "MaterialIcons",
    label: "Products"   
  },
  {
    route: "/cart",
    icon: "shopping-cart",
    iconFamily: "MaterialIcons",
    label: "Cart"
  },
  {
    route: "/profile-section",
    icon: "person",
    iconFamily: "MaterialIcons",
    label: "Profile"
  }
];