import { TouchableOpacity, Image } from "react-native";

import trashCanIcon from '../../assets/img/TrashCan.png'

import { styles } from "./styles";

const ButtonDeleteTask = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={trashCanIcon} />
    </TouchableOpacity>
  );
};

export default ButtonDeleteTask;