import { View } from "react-native";

import TasksCreatedIndicator from "../TasksCreatedIndicator";
import TasksDoneIndicator from "../TasksDoneIndicator";

import { styles } from "./styles";

const StatisticsBar = () => {
  return (
    <View style={ styles.container }>
      <TasksCreatedIndicator />
      <TasksDoneIndicator />
    </View>
  );
};

export default StatisticsBar;