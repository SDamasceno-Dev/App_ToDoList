import { TouchableOpacity, Image } from "react-native";

import plusIcon from '../../assets/img/plus.png';

import { styles } from "./styles";

const ButtonAddTask = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={plusIcon} />
    </TouchableOpacity>
  );
};

export default ButtonAddTask;