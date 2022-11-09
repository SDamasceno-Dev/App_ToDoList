import { View, Text } from "react-native";

import { styles } from "./styles";

type TasksCreatedIndicatorProps = {
  tasksCreated: number;
};

const TasksCreatedIndicator = ({ tasksCreated }: TasksCreatedIndicatorProps) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Criadas</Text>
      <View style={ styles.dataContainer }>
        <Text style={styles.dataText}>{tasksCreated}</Text>
      </View>
    </View>
  );
};

export default TasksCreatedIndicator;