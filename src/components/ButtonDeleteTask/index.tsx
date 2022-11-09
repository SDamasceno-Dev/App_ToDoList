import { TouchableOpacity, Image } from "react-native";

import trashCanIcon from '../../assets/img/TrashCan.png'

import { styles } from "./styles";

type ButtonDeleteTaskProps = {
  id: string;
  removeTask: (id: string) => void;
};

const ButtonDeleteTask = ({id, removeTask}: ButtonDeleteTaskProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {removeTask(id)}}>
      <Image source={trashCanIcon} />
    </TouchableOpacity>
  );
};

export default ButtonDeleteTask;