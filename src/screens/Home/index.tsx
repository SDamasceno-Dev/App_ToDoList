import { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native'

import Header from '../../components/Header';
import ListEmpty from '../../components/ListEmpty';
import StatisticsBar from '../../components/StatisticsBar';
import TaskItem from '../../components/TaskItem';

import { styles } from './styles';

type TaskListProps = {
  id: string;
  task: string;
}

const Home = () => {
  const [tasksList, setTasksList] = useState<TaskListProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = (): void => {
    if (taskDescription === '') {
      Alert.alert(
        'Ops...', 
        'É necessário digitar o conteúdo da tarefa para poder adicionar'
      );
      return;
    }

    setTasksList(
      prevState => [
        ...prevState, 
        {
          id: (Date.now().toString()), 
          task: taskDescription
        }
      ])
  };

  useEffect(() => {
    console.info('taskList', tasksList)
  }, [tasksList])

  return (
    <View style={styles.container}>
      <Header 
        userInputTask={setTaskDescription} 
        userAddTask={handleAddTask} 
      />
      <View style={styles.content}>
        <StatisticsBar />
        <FlatList 
          data={tasksList} 
          ListEmptyComponent={ListEmpty}
          keyExtractor={item => item.id}
          renderItem={TaskItem}
          style={styles.taskListContainer}
        />
      </View>      
    </View>
  );
}

export default Home ;