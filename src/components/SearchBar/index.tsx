import { View } from "react-native";

import InputTask from "../InputTask";
import ButtonAddTask from "../ButtonAddTask";

import { styles } from "./styles";

const SearchBar = () => {
  return (
    <View style={ styles.container }>
      <InputTask />
      <ButtonAddTask />
    </View>
  );
};

export default SearchBar;