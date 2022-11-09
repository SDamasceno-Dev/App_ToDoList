import { Text, View } from "react-native";

import ButtonCheckBox from "../ButtonCheckBox";
import ButtonDeleteTask from "../ButtonDeleteTask";

import { styles } from "./styles";

const TaskItem = (props: any) => {
  
  return (
    <View style={ styles.container }>
      <ButtonCheckBox />
      <Text style={ styles.descriptionText } numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis placerat sed diam nec maximus.
      </Text>
      <ButtonDeleteTask />
    </View>
  );
};

export default TaskItem;