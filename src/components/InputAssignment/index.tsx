import { TextInput } from 'react-native';
import { styles } from './styles';

const InputAssignment = () => {
  return (
    <TextInput 
      style={styles.container} 
      placeholder='Adicione uma nova tarefa' 
      placeholderTextColor='#808080' 
    />
  );
};

export default InputAssignment;