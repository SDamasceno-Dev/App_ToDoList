import { TouchableOpacity, Image } from "react-native";

import buttonBackground from '../../assets/img/Button.png'

import { styles } from "./styles";

const ButtonAddTask = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={buttonBackground} />
    </TouchableOpacity>
  );
};

export default ButtonAddTask;