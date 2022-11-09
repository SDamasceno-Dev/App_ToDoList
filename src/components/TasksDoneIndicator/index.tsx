import { View, Text } from "react-native";

import { styles } from "./styles";

type TasksDoneIndicatorProps = {
  tasksDone: number;
};

const TasksDoneIndicator = ({ tasksDone }: TasksDoneIndicatorProps) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Concluídas</Text>
      <View style={ styles.dataContainer }>
        <Text style={styles.dataText}>{tasksDone}</Text>
      </View>
    </View>
  );
};

export default TasksDoneIndicator;