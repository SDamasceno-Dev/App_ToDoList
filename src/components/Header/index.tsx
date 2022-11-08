import { View, Text, Image } from "react-native";

import logoTodo from '../../assets/img/Logo.png'

import { styles } from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logoTodo} />
    </View>
  );
};

export default Header;