import { View } from "react-native";

import TasksCreatedIndicator from "../TasksCreatedIndicator";
import TasksDoneIndicator from "../TasksDoneIndicator";

import { styles } from "./styles";

type StatisticsBarProps = {
  tasksCreated: number;
};

const StatisticsBar = ({ tasksCreated }: StatisticsBarProps) => {
  return (
    <View style={ styles.container }>
      <TasksCreatedIndicator tasksCreated={tasksCreated} />
      <TasksDoneIndicator />
    </View>
  );
};

export default StatisticsBar;