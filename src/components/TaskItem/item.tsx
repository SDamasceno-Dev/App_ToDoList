import { Text, View } from "react-native";

import { styles } from "./styles";

const TaskItem = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.descriptionText }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis placerat sed diam nec maximus.
      </Text>
    </View>
  );
};

export default TaskItem;