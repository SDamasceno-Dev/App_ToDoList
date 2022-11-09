import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkBoxUnselected: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderStyle: 'solid',
    borderRadius: 9,
  },
  checkBoxSelected: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5E60CE',
    borderStyle: 'solid',
    borderRadius: 9,
    backgroundColor: '#5E60CE'
  },
});