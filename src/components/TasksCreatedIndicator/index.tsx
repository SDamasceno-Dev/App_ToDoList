import { View, Text } from "react-native";

import { styles } from "./styles";

const TasksCreatedIndicator = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.label }>Criadas</Text>
      <View style={ styles.dataContainer }>
        <Text style={styles.dataText}>8</Text>
      </View>
    </View>
  );
};

export default TasksCreatedIndicator;