import { TouchableOpacity, Image } from "react-native";

import buttonBackground from '../../assets/img/Button.png'

import { styles } from "./styles";

const ButtonAddAssignment = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={buttonBackground} />
    </TouchableOpacity>
  );
};

export default ButtonAddAssignment;