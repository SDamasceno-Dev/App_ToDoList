import { View } from "react-native";

import InputAssignment from "../InputAssignment";

import { styles } from "./styles";

const SearchBar = () => {
  return (
    <View style={ styles.container }>
      <InputAssignment />
    </View>
  );
};

export default SearchBar;