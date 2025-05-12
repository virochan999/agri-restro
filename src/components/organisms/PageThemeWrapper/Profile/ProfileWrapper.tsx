import React from 'react'
import { ImageBackground,View,SafeAreaView, Text } from 'react-native'
import styles from './ProfileWrapperStyle'
import Image from '@/src/components/atoms/Image/Image'

type ProfileWrapperProps = {
  children: React.ReactNode
}
function ProfileWrapper({children}:ProfileWrapperProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.imageContainer, styles.topLeftBgImage]}>
        <View style={styles.textContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Set Up Your</Text>
            <Text style={styles.heading}>Restaurant Account</Text>
            <Text style={styles.subHeading}>Create your profile to start ordering fresh produce directly from farmers</Text>
          </View>
          <View 
            style={styles.profileMobileImage}
          >
            <Image 
              source={require("@/src/assets/images/profile/profile-mobile.png")}
              />
            </View>
        </View>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default ProfileWrapper