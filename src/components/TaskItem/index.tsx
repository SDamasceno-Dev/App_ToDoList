import { Text, View } from "react-native";

import ButtonCheckBox from "../ButtonCheckBox";
import ButtonDeleteTask from "../ButtonDeleteTask";

import { styles } from "./styles";

type TaskItemProps = {
  item: {
    task: string;
  };
};

const TaskItem = ({ item }: TaskItemProps) => {
  const { task } = item;
  
  return (
    <View style={ styles.container }>
      <ButtonCheckBox />
      <Text style={ styles.descriptionText } numberOfLines={2}>
        {task}
      </Text>
      <ButtonDeleteTask />
    </View>
  );
};

export default TaskItem;