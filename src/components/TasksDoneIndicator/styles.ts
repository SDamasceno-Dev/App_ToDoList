import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
    marginRight: 8,
  },
  dataContainer: {
    height: 20,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#333333'
  },
  dataText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9'
  }
});