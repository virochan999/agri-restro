import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    padding: 4,
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 50,
    marginBottom: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  logoutText: {
    color: '#FF3B30',
    fontWeight: '600',
    fontSize: 16,
  },
});