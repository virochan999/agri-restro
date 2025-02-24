import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
  ViewabilityConfig,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewToken,
} from 'react-native';

const { width } = Dimensions.get('window');

// Define interfaces for the component props and data
interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  data: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onSlideChange?: (index: number) => void;
}

interface PaginationProps {
  data: CarouselItem[];
  scrollX: Animated.Value;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  autoPlay = false,
  autoPlayInterval = 3000,
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<ScrollView>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index ?? 0;
      setCurrentIndex(newIndex);
      onSlideChange?.(newIndex);
    }
  }).current;

  const viewConfig = useRef<ViewabilityConfig>({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = (index: number): void => {
    if (slidesRef.current && index >= 0 && index < data.length) {
      slidesRef.current.scrollTo({ x: index * width, animated: true });
    }
  };

  // Pagination component with types
  const Pagination: React.FC<PaginationProps> = ({ data, scrollX }) => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={slidesRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={32}
        // onViewableItemsChanged={viewableItemsChanged}
        // viewabilityConfig={viewConfig}
      >
        {data.map((item, index) => (
          <Animated.View key={index} style={styles.slide}>
            <View style={styles.slideContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
      <Pagination data={data} scrollX={scrollX} />

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.navButton, { opacity: currentIndex === 0 ? 0.5 : 1 }]}
          onPress={() => scrollTo(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            { opacity: currentIndex === data.length - 1 ? 0.5 : 1 },
          ]}
          onPress={() => scrollTo(currentIndex + 1)}
          disabled={currentIndex === data.length - 1}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#493d8a',
    marginHorizontal: 4,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#493d8a',
    borderRadius: 8,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Carousel;