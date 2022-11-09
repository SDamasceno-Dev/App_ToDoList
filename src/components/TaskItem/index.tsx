import { useState, Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

import ButtonCheckBox from "../ButtonCheckBox";
import ButtonDeleteTask from "../ButtonDeleteTask";

import { styles } from "./styles";

type TaskItemProps = {
  handleTasksDone: (id: string) => void;
  item: {
    id: string;
    task: string;
  };
  removeTask: (id: string) => void;
};

const TaskItem = ({ handleTasksDone, item, removeTask }: TaskItemProps) => {
  const [checkSelected, setCheckSelected] = useState(false);
  const { id, task } = item;
  
  return (
    <View style={ styles.container }>
      <ButtonCheckBox 
        checkSelected={checkSelected}
        handleTasksDone={handleTasksDone}
        id={item?.id}
        setCheckSelected={setCheckSelected} 
      />
      <Text 
        style={ 
          checkSelected 
          ? styles.descriptionTextInactive 
          : styles.descriptionTextActive 
        } 
        numberOfLines={2}
      >
        {task}
      </Text>
      <ButtonDeleteTask id={id} removeTask={removeTask} />
    </View>
  );
};

export default TaskItem;