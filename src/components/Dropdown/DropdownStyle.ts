import { Colors } from "@/src/constants/Colors";
import { spacing } from "@/src/constants/spacing";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
    marginBottom: spacing.spacing.medium,
  },
  label: {
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    marginBottom: 6,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.spacing.medium,
  },
  dropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: 'transparent',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  placeholder: {
    color: Colors.text.secondary,
  },
  arrow: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedOptionText: {
    fontWeight: '500',
  },
});