import { View, Image } from "react-native";

import SearchBar from "../SearchBar";

import logoTodo from '../../assets/img/Logo.png'

import { styles } from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logoTodo} />
      <SearchBar />
    </View>
  );
};

export default Header;