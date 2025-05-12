import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';
import { getProfileRoute } from '@/src/config/profile';

const notificationOptions = [
  { id: 'orderStatus', title: 'Order Status' },
  { id: 'deliveryAlerts', title: 'Delivery Alerts' },
  { id: 'promotions', title: 'Promotions & Offers' },
  { id: 'paymentBilling', title: 'Payment & Billing' },
];

const displayOptions = [
  { id: 'lockscreen', title: 'Lock screen notifications' },
  { id: 'popupStyle', title: 'Notification pop-up style' },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [enableAll, setEnableAll] = useState(true);
  const [notificationSettings, setNotificationSettings] = useState({
    orderStatus: true,
    deliveryAlerts: true,
    promotions: true,
    paymentBilling: true,
    lockscreen: true,
    popupStyle: true,
  });

  const toggleSetting = (id: string) => {
    setNotificationSettings(prev => {
      const newSettings = { ...prev, [id]: !prev[id as keyof typeof prev] };
      
      // Check if all notification options are enabled
      const allEnabled = Object.keys(newSettings).every(key => newSettings[key as keyof typeof newSettings]);
      setEnableAll(allEnabled);
      
      return newSettings;
    });
  };

  const toggleAll = () => {
    const newEnableAll = !enableAll;
    setEnableAll(newEnableAll);
    
    // Update all individual settings
    const updatedSettings = Object.keys(notificationSettings).reduce((acc, key) => {
      return { ...acc, [key]: newEnableAll };
    }, {});
    
    setNotificationSettings(updatedSettings as typeof notificationSettings);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          onPress={() => {
              const route = getProfileRoute('/profile/settings');
              if (route) router.push(route);
            }
          } 
          style={styles.settingsButton}
        >
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.screenTitle}>Notification Preferences</Text>
        
        <View style={styles.toggleRow}>
          <Text style={styles.toggleTitle}>Enable all</Text>
          <Switch
            value={enableAll}
            onValueChange={toggleAll}
            trackColor={{ false: '#e0e0e0', true: `${Colors.green}80` }}
            thumbColor={enableAll ? Colors.green : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Push Notifications</Text>
        
        <View style={styles.optionsContainer}>
          {notificationOptions.map((option) => (
            <View key={option.id} style={styles.optionRow}>
              <Text style={styles.optionText}>{option.title}</Text>
              <Switch
                value={notificationSettings[option.id as keyof typeof notificationSettings]}
                onValueChange={() => toggleSetting(option.id)}
                trackColor={{ false: '#e0e0e0', true: `${Colors.green}80` }}
                thumbColor={notificationSettings[option.id as keyof typeof notificationSettings] ? Colors.green : '#f4f3f4'}
              />
            </View>
          ))}
        </View>
        
        <View style={styles.optionsContainer}>
          {displayOptions.map((option) => (
            <View key={option.id} style={styles.optionRow}>
              <Text style={styles.optionText}>{option.title}</Text>
              <Switch
                value={notificationSettings[option.id as keyof typeof notificationSettings]}
                onValueChange={() => toggleSetting(option.id)}
                trackColor={{ false: '#e0e0e0', true: `${Colors.green}80` }}
                thumbColor={notificationSettings[option.id as keyof typeof notificationSettings] ? Colors.green : '#f4f3f4'}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  backButton: {
    padding: 8,
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  optionsContainer: {
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 14,
  },
});