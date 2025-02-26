import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import Text from '@/src/components/atoms/Text/Text';
import { styles } from './SplashScreenStyles';

const { height } = Dimensions.get('window');

type SplashScreenProps = {
  onComplete: () => void;
};

const SplashScreen = ({ onComplete } : SplashScreenProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(height)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // Fade in the background
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Move the hand up
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      // Fade in the logo
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Fade in the text
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Hold for a moment
      Animated.delay(1000),
    ]).start(() => {
      if (onComplete) onComplete();
    });
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.borderContainer}>
        <Image
          source={require('@/src/assets/images/startup/left-border.png')}
          style={styles.leftBorder}
          resizeMode="stretch"
        />
        <Image
          source={require('@/src/assets/images/startup/right-border.png')}
          style={styles.rightBorder}
          resizeMode="stretch"
        />
      </View>
      
      <Animated.Image
        source={require('@/src/assets/images/startup/hand.png')}
        style={[
          styles.handImage,
          {
            transform: [{ translateY: translateYAnim }],
          },
        ]}
        resizeMode="contain"
      />
      
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Text style={styles.mainText}>K</Text>
      </Animated.View>
      
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.brandText}>KHET-TO-KHARIDAR</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;