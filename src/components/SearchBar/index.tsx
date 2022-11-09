import { Dispatch, SetStateAction } from 'react';
import { View } from "react-native";

import InputTask from "../InputTask";
import ButtonAddTask from "../ButtonAddTask";

import { styles } from "./styles";

type SearchBarProps = {
  inputTaskValue: string;
  userAddTask: () => void;
  userInputTask: Dispatch<SetStateAction<string>>;
};


const SearchBar = ({ inputTaskValue, userInputTask, userAddTask }: SearchBarProps) => {
  return (
    <View style={ styles.container }>
      <InputTask userInputTask={userInputTask} value={inputTaskValue} />
      <ButtonAddTask userAddTask={userAddTask} />
    </View>
  );
};

export default SearchBar;