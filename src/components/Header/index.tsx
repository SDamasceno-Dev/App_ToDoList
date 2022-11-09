import { Dispatch, SetStateAction } from 'react';
import { View, Image } from "react-native";

import SearchBar from "../SearchBar";

import logoTodo from '../../assets/img/Logo.png'

import { styles } from './styles';

type HeaderProps = {
  inputTaskValue: string;
  userAddTask: () => void;
  userInputTask: Dispatch<SetStateAction<string>>;
};

const Header = ({ inputTaskValue, userAddTask, userInputTask }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoTodo} />
      <SearchBar 
        userInputTask={userInputTask} 
        userAddTask={userAddTask} 
        inputTaskValue={inputTaskValue}
      />
    </View>
  );
};

export default Header;