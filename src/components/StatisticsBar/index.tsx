import { View } from "react-native";

import TasksCreatedIndicator from "../TasksCreatedIndicator";
import TasksDoneIndicator from "../TasksDoneIndicator";

import { styles } from "./styles";

type StatisticsBarProps = {
  tasksCreated: number;
  tasksDone: number;
};

const StatisticsBar = ({ tasksCreated, tasksDone }: StatisticsBarProps) => {
  return (
    <View style={ styles.container }>
      <TasksCreatedIndicator tasksCreated={tasksCreated} />
      <TasksDoneIndicator tasksDone={tasksDone} />
    </View>
  );
};

export default StatisticsBar;