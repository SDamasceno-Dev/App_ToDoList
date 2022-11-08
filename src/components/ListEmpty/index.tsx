import { View, Image, Text } from "react-native";

import clipboardImg from '../../assets/img/Clipboard.png';

import { styles } from "./styles";

const ListEmpty = () => {
  return (
    <View style={ styles.container }>
      <Image source={clipboardImg} style={styles.imageContainer} />
      <Text style={[styles.description, {fontWeight: 'bold'}]}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};

export default ListEmpty;