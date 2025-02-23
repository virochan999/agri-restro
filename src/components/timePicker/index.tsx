import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';

interface TimePickerProps {
  selectedTime: Date;
  onTimeChange: (time: Date) => void;
  minuteInterval?: number;
  is24Hour?: boolean;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onTimeChange,
  minuteInterval = 1,
  is24Hour = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempTime, setTempTime] = useState(selectedTime);
  const scrollYHour = useRef(new Animated.Value(0)).current;
  const scrollYMinute = useRef(new Animated.Value(0)).current;
  const scrollYPeriod = useRef(new Animated.Value(0)).current;

  const generateTimeNumbers = (start: number, end: number, interval: number = 1): string[] => {
    const numbers: string[] = [];
    for (let i = start; i <= end; i += interval) {
      numbers.push(i.toString().padStart(2, '0'));
    }
    return numbers;
  };

  const hours = is24Hour 
    ? generateTimeNumbers(0, 23) 
    : generateTimeNumbers(1, 12);
  const minutes = generateTimeNumbers(0, 59, minuteInterval);
  const periods = ['AM', 'PM'];

  const itemHeight = 50;
  const visibleItems = 5;
  const containerHeight = itemHeight * visibleItems;

  const handleConfirm = () => {
    onTimeChange(tempTime);
    setModalVisible(false);
  };

  const handleTimeChange = (type: 'hour' | 'minute' | 'period', value: string | number) => {
    const newTime = new Date(tempTime);
    
    if (type === 'hour') {
      let hour = parseInt(value.toString());
      if (!is24Hour) {
        const isPM = tempTime.getHours() >= 12;
        if (isPM) hour = hour === 12 ? 12 : hour + 12;
        else hour = hour === 12 ? 0 : hour;
      }
      newTime.setHours(hour);
    } else if (type === 'minute') {
      newTime.setMinutes(parseInt(value.toString()));
    } else if (type === 'period') {
      let hours = tempTime.getHours();
      if (value === 'AM' && hours >= 12) {
        hours -= 12;
      } else if (value === 'PM' && hours < 12) {
        hours += 12;
      }
      newTime.setHours(hours);
    }
    
    setTempTime(newTime);
  };

  const renderPickerItems = (
    items: string[],
    selectedValue: string,
    onValueChange: (value: string) => void,
    scrollY: Animated.Value
  ) => {
    return (
      <View style={styles.pickerColumn}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <View style={{ height: containerHeight / 2 }} />
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.pickerItem,
                { height: itemHeight },
                selectedValue === item && styles.selectedItem,
              ]}
              onPress={() => onValueChange(item)}
            >
              <Text style={[
                styles.pickerItemText,
                selectedValue === item && styles.selectedItemText,
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={{ height: containerHeight / 2 }} />
        </ScrollView>
      </View>
    );
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    if (is24Hour) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.timeButton}
      >
        <Text style={styles.timeButtonText}>{formatTime(selectedTime)}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.headerButton}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Select Time</Text>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={styles.headerButton}>Confirm</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              {renderPickerItems(
                hours,
                (is24Hour ? tempTime.getHours() : (tempTime.getHours() % 12 || 12))
                  .toString()
                  .padStart(2, '0'),
                (value) => handleTimeChange('hour', value),
                scrollYHour
              )}
              <Text style={styles.pickerSeparator}>:</Text>
              {renderPickerItems(
                minutes,
                tempTime.getMinutes().toString().padStart(2, '0'),
                (value) => handleTimeChange('minute', value),
                scrollYMinute
              )}
              {!is24Hour && (
                <>
                  <View style={styles.periodSeparator} />
                  {renderPickerItems(
                    periods,
                    tempTime.getHours() >= 12 ? 'PM' : 'AM',
                    (value) => handleTimeChange('period', value),
                    scrollYPeriod
                  )}
                </>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  timeButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  timeButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  pickerColumn: {
    height: 50 * 3,
    width: 60,
    overflow: 'hidden',
  },
  pickerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  pickerItemText: {
    fontSize: 20,
  },
  selectedItemText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  pickerSeparator: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  periodSeparator: {
    width: 20,
  },
});

export default CustomTimePicker;