import { View, StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import Svg, { Path } from 'react-native-svg';

interface KLogoProps {
  size?: number;
  color?: string;
}

const KLogo = ({ size = 100, color = Colors.text.tertiary }: KLogoProps) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size * 1.2} viewBox="0 0 100 120">
        <Path
          d="M20 10 L20 110 L40 110 L40 65 L75 110 L100 110 L55 60 L100 10 L75 10 L40 55 L40 10 Z"
          fill={color}
        />
      </Svg>
      <View style={[styles.overlay, { width: size, height: size * 1.2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    borderRadius: 8,
  }
});

export default KLogo;