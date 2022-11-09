import { Dispatch, SetStateAction } from 'react';
import { View } from "react-native";

import InputTask from "../InputTask";
import ButtonAddTask from "../ButtonAddTask";

import { styles } from "./styles";

type SearchBarProps = {
  userInputTask: Dispatch<SetStateAction<string>>;
  userAddTask: () => void;
};


const SearchBar = ({ userInputTask, userAddTask }: SearchBarProps) => {
  return (
    <View style={ styles.container }>
      <InputTask userInputTask={userInputTask} />
      <ButtonAddTask userAddTask={userAddTask} />
    </View>
  );
};

export default SearchBar;