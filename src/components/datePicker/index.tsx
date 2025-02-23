import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
  Dimensions,
} from 'react-native';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate = new Date(1900, 0, 1),
  maxDate = new Date(2100, 11, 31),
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempDate, setTempDate] = useState(selectedDate);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateYears = (): number[] => {
    const years: number[] = [];
    const startYear = minDate.getFullYear();
    const endYear = maxDate.getFullYear();
    
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const isDateValid = (date: Date): boolean => {
    return date >= minDate && date <= maxDate;
  };

  const handleDateChange = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month, day);
    if (isDateValid(newDate)) {
      setTempDate(newDate);
    }
  };

  const handleConfirm = () => {
    onDateChange(tempDate);
    setModalVisible(false);
  };

  const renderCalendar = () => {
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days: (number | null)[] = Array(firstDayOfMonth).fill(null);
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <View style={styles.calendar}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <Text key={`header-${index}`} style={styles.weekDay}>
            {day}
          </Text>
        ))}
        {days.map((day, index) => (
          <TouchableOpacity
            key={`day-${index}`}
            style={[
              styles.dayButton,
              day === tempDate.getDate() && styles.selectedDay,
            ]}
            onPress={() => day && handleDateChange(year, month, day)}
            disabled={!day}
          >
            <Text style={[
              styles.dayText,
              day === tempDate.getDate() && styles.selectedDayText,
            ]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateButtonText}>
          {selectedDate.toLocaleDateString()}
        </Text>
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
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={styles.headerButton}>Confirm</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.selectors}>
              <View style={styles.pickerContainer}>
                <TouchableOpacity
                  onPress={() => {
                    const newDate = new Date(tempDate);
                    newDate.setMonth(tempDate.getMonth() - 1);
                    if (isDateValid(newDate)) {
                      setTempDate(newDate);
                    }
                  }}
                >
                  <Text style={styles.navigationButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.monthYear}>
                  {months[tempDate.getMonth()]} {tempDate.getFullYear()}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    const newDate = new Date(tempDate);
                    newDate.setMonth(tempDate.getMonth() + 1);
                    if (isDateValid(newDate)) {
                      setTempDate(newDate);
                    }
                  }}
                >
                  <Text style={styles.navigationButton}>→</Text>
                </TouchableOpacity>
              </View>
              {renderCalendar()}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  dateButtonText: {
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
    marginBottom: 20,
  },
  headerButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  selectors: {
    alignItems: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationButton: {
    fontSize: 24,
    color: '#007AFF',
    padding: 10,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dayButton: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
  },
  selectedDayText: {
    color: 'white',
  },
});

export default CustomDatePicker;