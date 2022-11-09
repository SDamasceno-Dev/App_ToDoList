import { TouchableOpacity, Image } from "react-native";

import plusIcon from '../../assets/img/plus.png';

import { styles } from "./styles";

type ButtonAddTaskProps = {
  userAddTask: () => void;
}

const ButtonAddTask = ({ userAddTask }: ButtonAddTaskProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={userAddTask}>
      <Image source={plusIcon} />
    </TouchableOpacity>
  );
};

export default ButtonAddTask;