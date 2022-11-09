import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid',
    backgroundColor: '#262626',
    marginVertical: 4,
  },
  descriptionTextActive: {
    flex: 1,
    fontSize: 13,
    color: '#F2F2F2',
  },
  descriptionTextInactive: {
    flex: 1,
    fontSize: 13,
    color: '#808080',
    textDecorationLine: 'line-through'
  }
});