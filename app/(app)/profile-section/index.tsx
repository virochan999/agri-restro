import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ProfileSection from '@/src/components/organisms/Profile/ProfileSection/ProfileSection';
import { PROFILE_SECTIONS, PROFILE_ROUTES, getProfileRoute, ProfileRouteValues } from '@/src/config/profile';
import styles from './SectionStyles';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/(auth)/login');
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
          }} 
          style={styles.settingsButton}
        >
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <Text style={styles.nameText}>Name</Text>
        </View>

        {Object.values(PROFILE_SECTIONS).map((section, index) => (
          <ProfileSection
            key={index}
            title={section.title}
            options={section.options.map(option => ({
              ...option,
              route: getProfileRoute(option.route),
            }))}
          />
        ))}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}