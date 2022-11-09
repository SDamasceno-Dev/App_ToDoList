import { useState } from "react";
import { TouchableOpacity,  View, Image } from "react-native";

import checkIcon from '../../assets/img/CheckIcon.png'

import { styles } from "./styles";

type ButtonCheckProps = {
  onClick: () => void;
}

const ButtonCheckBox = () => {
  const [checkSelected, setCheckSelected] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => {
        setCheckSelected(!checkSelected);
      }}
    >
      <View style={checkSelected ? styles.checkBoxSelected : styles.checkBoxUnselected}>
        {checkSelected && (<Image source={checkIcon} />) }
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCheckBox;