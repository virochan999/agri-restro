import { useState, ReactElement} from 'react'
import { SafeAreaView, View } from 'react-native'
import {styles} from './BasketWrapperStyles'
import TextInput from '@/src/components/atoms/TextInput/TextInput'
function BasketWrapper({children}:{children:ReactElement}) {
  const [search, setSearch] = useState<string>('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchInputContainer}>
          <TextInput
          id='search'
          value={search}
          onChangeText={(text)=>setSearch(text)}
          placeholder="Search"
        />
      </View>
      <View style={styles.content}>
       {children}
      </View>
    </SafeAreaView>
  )
}

export default BasketWrapper;