import { Dispatch, SetStateAction } from 'react';
import { View, Image } from "react-native";

import SearchBar from "../SearchBar";

import logoTodo from '../../assets/img/Logo.png'

import { styles } from './styles';

type HeaderProps = {
  userInputTask: Dispatch<SetStateAction<string>>;
  userAddTask: () => void;
};

const Header = ({ userInputTask, userAddTask }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoTodo} />
      <SearchBar 
        userInputTask={userInputTask} 
        userAddTask={userAddTask} 
      />
    </View>
  );
};

export default Header;