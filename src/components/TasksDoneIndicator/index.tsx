import { View, Text } from "react-native";

import { styles } from "./styles";

const TasksDoneIndicator = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Concluídas</Text>
      <View style={ styles.dataContainer }>
        <Text style={styles.dataText}>0</Text>
      </View>
    </View>
  );
};

export default TasksDoneIndicator;