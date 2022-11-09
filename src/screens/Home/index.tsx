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

type TasksDoneProps = {
  id: string;
};

const Home = () => {
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [tasksDone, setTasksDone] = useState<TasksDoneProps[]>([]);

  const handleAddTask = (): void => {
    // Check if task description is inserted
    if (taskDescription === '') {
      Alert.alert(
        'Ops...', 
        'É necessário digitar a descrição da tarefa para poder adicionar.'
      );
      return;
    }

    // Add task description on TaskList
    setTaskList(
      prevState => [
        ...prevState, 
        {
          id: (Date.now().toString()), 
          task: taskDescription
        }
      ]
    )
  };

  const handleRemoveTask = (id: string) => {
    console.info('id', id);
  };

  useEffect(() => {
    setTaskDescription('');
  }, [taskList])

  return (
    <View style={styles.container}>
      <Header 
        taskInputText={taskDescription}
        userAddTask={handleAddTask}
        userInputTask={setTaskDescription}
      />
      <View style={styles.content}>
        <StatisticsBar 
          tasksCreated={taskList.length} 
          tasksDone={tasksDone.length} 
        />
        <FlatList 
          data={taskList} 
          ListEmptyComponent={ListEmpty}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskItem removeTask={handleRemoveTask} item={item} />
          )}
          style={styles.taskListContainer}
        />
      </View>      
    </View>
  );
}

export default Home ;