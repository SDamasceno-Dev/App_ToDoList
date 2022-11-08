import { View, Image } from "react-native";

import listEmptyImg from '../../assets/img/Empty.png';

import { styles } from "./styles";

const ListEmpty = () => {
  return (
    <View style={ styles.container }>
      <Image source={listEmptyImg} />
    </View>
  );
};

export default ListEmpty;