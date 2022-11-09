import { Text, View } from "react-native";

import ButtonCheckBox from "../ButtonCheckBox";
import ButtonDeleteTask from "../ButtonDeleteTask";

import { styles } from "./styles";

type TaskItemProps = {
  item: {
    id: string;
    task: string;
  };
  removeTask: (id: string) => void;
};

const TaskItem = ({ item, removeTask }: TaskItemProps) => {
  const { id, task } = item;
  
  return (
    <View style={ styles.container }>
      <ButtonCheckBox />
      <Text style={ styles.descriptionText } numberOfLines={2}>
        {task}
      </Text>
      <ButtonDeleteTask id={id} removeTask={removeTask} />
    </View>
  );
};

export default TaskItem;