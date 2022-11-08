import { View } from "react-native";

import InputAssignment from "../InputAssignment";
import ButtonAddAssignment from "../ButtonAddAssignment";

import { styles } from "./styles";

const SearchBar = () => {
  return (
    <View style={ styles.container }>
      <InputAssignment />
      <ButtonAddAssignment />
    </View>
  );
};

export default SearchBar;