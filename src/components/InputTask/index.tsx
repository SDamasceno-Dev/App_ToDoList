import { Dispatch, SetStateAction } from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

type InputTaskProps = {
  userInputTask: Dispatch<SetStateAction<string>>;
};


const InputTask = ({ userInputTask }: InputTaskProps) => {
  return (
    <TextInput 
      style={styles.container} 
      placeholder='Adicione uma nova tarefa' 
      placeholderTextColor='#808080'
      onChangeText={userInputTask}
    />
  );
};

export default InputTask;