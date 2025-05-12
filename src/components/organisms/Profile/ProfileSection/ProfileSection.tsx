import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './ProfileSectionStyles';
import { getProfileRoute, ProfileOption as ProfileOptionType } from '@/src/config/profile';

interface ProfileOptionProps {
  title: string;
  onPress: () => void;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );
};

interface ProfileSectionProps {
  title?: string;
  options: ProfileOptionType[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, options }) => {
  const router = useRouter();

  const handleOptionPress = (option: ProfileOptionType) => {
    if (option.action) {
      option.action();
    } else if (option.route) {
      const route = getProfileRoute(option.route);
      if (route) {
        router.push(route);
      }
    }
  };

  return (
    <View style={styles.sectionContainer}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      <View style={styles.optionsWrapper}>
        {options.map((option, index) => (
          <ProfileOption
            key={index}
            title={option.title}
            onPress={() => handleOptionPress(option)}
          />
        ))}
      </View>
    </View>
  );
};

export default ProfileSection;