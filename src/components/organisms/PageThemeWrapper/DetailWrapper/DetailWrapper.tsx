import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Heart } from '@/src/components/atoms/heart'
import { ReactElement, useState } from 'react'
import styles from "./detailWrapperStyles"
function DetailWrapper({
  children,
  heading,
  backNevigation=true,
  favIcon= false,
  searchIcon = false,
  searchedValue,
  onChangeSearch
}:{
  children:ReactElement,
  heading?: string,
  backNevigation?: boolean
  favIcon?: boolean
  searchIcon?: boolean
  searchedValue?: string,
  onChangeSearch?: ()=> void
}) {
  const [searchVisible, setSearchVisible] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      {!searchVisible && <View style={styles.nav}>
        {backNevigation && <MaterialIcons style={styles.arrowIcon} name="arrow-left" size={30} color="black" />}
        <Text style={styles.headerText}>{heading}</Text>
        <View>
        {favIcon && <Heart />}
        {searchIcon && <TouchableOpacity onPress={()=>setSearchVisible(true)}><MaterialIcons style={styles.arrowIcon} name="search" size={30} color="black" /></TouchableOpacity>}
        </View>
      </View>}
      <View style={{position: "relative"}}>
        {searchVisible && <><TextInput
          style={styles.searchInput}
          value={searchedValue}
          onChangeText={onChangeSearch}
          placeholder="Search"
          id="SearchWishList"
        />
        <TouchableOpacity style={{position: "absolute", right: 10, top: "50%", transform: [{translateY: '-50%'}]}} onPress={()=>setSearchVisible(false)}>
         <MaterialIcons name="close" size={30} color="white" />
        </TouchableOpacity>
        </>
        }
      </View>
    </View>
    <View style={{flex: 1}}>
      {children}
    </View>
    
  </SafeAreaView>
  )
}

export default DetailWrapper