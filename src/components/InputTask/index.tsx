import { Dispatch, SetStateAction } from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

type InputTaskProps = {
  userInputTask: Dispatch<SetStateAction<string>>;
  value: string;
};


const InputTask = ({ userInputTask, value }: InputTaskProps) => {
  return (
    <TextInput 
      style={styles.container} 
      placeholder='Adicione uma nova tarefa' 
      placeholderTextColor='#808080'
      onChangeText={userInputTask}
      value={value}
    />
  );
};

export default InputTask;