import { Dispatch, SetStateAction } from "react";
import { TouchableOpacity,  View, Image } from "react-native";

import checkIcon from '../../assets/img/CheckIcon.png'

import { styles } from "./styles";

type ButtonCheckBoxProps = {
  id: string;
  checkSelected: boolean;
  handleTasksDone: (id: string) => void;
  setCheckSelected: Dispatch<SetStateAction<boolean>>;
}

const ButtonCheckBox = (
  { handleTasksDone, id, setCheckSelected, checkSelected }: ButtonCheckBoxProps
) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => {
        setCheckSelected(!checkSelected);
        handleTasksDone(id);
      }}
    >
      <View style={checkSelected ? styles.checkBoxSelected : styles.checkBoxUnselected}>
        {checkSelected && (<Image source={checkIcon} />) }
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCheckBox;