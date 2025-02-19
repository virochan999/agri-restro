import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ViewStyle,
  TextStyle,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import styles from './DropdownStyle';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: DropdownOption[];
  label?: string;
  selectedValue?: string | number;
  onSelect: (option: DropdownOption) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  labelStyle?: TextStyle;
  selectedLabelStyle?: TextStyle;
  placeholderStyle?: TextStyle;
  maxHeight?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  selectedValue,
  onSelect,
  placeholder = 'Select an option',
  containerStyle,
  dropdownStyle,
  optionStyle,
  labelStyle,
  selectedLabelStyle,
  placeholderStyle,
  maxHeight = 200,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === selectedValue);
  const [dropdownLayout, setDropdownLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const containerRef = useRef<View>(null);

  useEffect(() => {
    // Configure layout animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isOpen]);

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (containerRef.current) {
      containerRef.current.measureInWindow((x, y, width, height) => {
        setDropdownLayout({ x, y, width, height });
        setIsOpen(!isOpen);
      });
    }
  };

  return (
    <View ref={containerRef} style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        style={[
          styles.dropdown,
          dropdownStyle,
          isOpen && styles.dropdownOpen
        ]}
        onPress={toggleDropdown}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.dropdownText,
            !selectedOption && styles.placeholder,
            !selectedOption ? placeholderStyle : selectedLabelStyle,
          ]}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Text style={[styles.arrow, isOpen && styles.arrowUp]}>▼</Text>
      </TouchableOpacity>

      {isOpen && (
        <View 
          style={[
            styles.optionsContainer,
            {
              maxHeight,
              width: dropdownLayout.width,
            }
          ]}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  optionStyle,
                  item.value === selectedValue && styles.selectedOption
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text 
                  style={[
                    styles.optionText,
                    labelStyle,
                    item.value === selectedValue && styles.selectedOptionText
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;