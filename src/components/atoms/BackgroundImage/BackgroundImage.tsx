import React from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  ImageBackgroundProps,
  ImageStyle,
  ViewStyle,
  ImageResizeMode,
  GestureResponderEvent,
  LayoutChangeEvent,
  Pressable,
} from 'react-native';

type BackgroundImageProps = Omit<ImageBackgroundProps, 'source' | 'style' | 'imageStyle'> & {
  children?: React.ReactNode;
  source: {
    uri: string;
  } | number;
  resizeMode?: ImageResizeMode;
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flex?: ViewStyle['flex'];
  height?: number;
  width?: number;
  opacity?: number;
  borderRadius?: number;
  backgroundColor?: string;
  overlayColor?: string;
  padding?: ViewStyle['padding'];
  margin?: ViewStyle['margin'];
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  children,
  source,
  resizeMode = 'cover',
  imageStyle,
  containerStyle,
  justifyContent = 'center',
  alignItems = 'center',
  flex = 1,
  width,
  height,
  opacity = 1,
  borderRadius,
  backgroundColor,
  overlayColor,
  padding,
  margin,
  onPress,
  onLayout,
  testID,
  accessible,
  accessibilityLabel,
  ...restProps
}) => {
  const containerStyles: ViewStyle = {
    flex,
    justifyContent,
    alignItems,
    width,
    height,
    padding,
    margin,
    backgroundColor,
  };

  const imageStyles: ImageStyle = {
    borderRadius,
    opacity,
    ...(overlayColor && { tintColor: overlayColor }),
  };

  const ImageBackgroundComponent = (
    <ImageBackground
      source={source}
      resizeMode={resizeMode}
      style={[containerStyles, containerStyle]}
      imageStyle={[imageStyles, imageStyle]}
      onLayout={onLayout}
      testID={testID}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      {...restProps}
    >
      {children}
    </ImageBackground>
  );

  return onPress ? (
    <Pressable onPress={onPress}>{ImageBackgroundComponent}</Pressable>
  ) : (
    ImageBackgroundComponent
  );
};

export default BackgroundImage;