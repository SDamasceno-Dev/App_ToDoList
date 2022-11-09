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

const Header = (
  { 
    inputTaskValue, 
    userAddTask, 
    userInputTask, 
  }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoTodo} />
      <SearchBar 
        inputTaskValue={inputTaskValue}
        userAddTask={userAddTask} 
        userInputTask={userInputTask} 
      />
    </View>
  );
};

export default Header;