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
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [tasksDone, setTasksDone] = useState<string[]>([]);


  const handleAddTask = (): void => {
    // Check if task description is inserted
    if (taskDescription.trim( ) === '') {
      Alert.alert(
        'Ops...', 
        'É necessário digitar a descrição da tarefa para poder adicionar.'
      );
      setTaskDescription('');
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
    setTaskDescription('');
  };

  const handleTasksDone = (id: string) => {
    if (tasksDone.findIndex(el => el === id) === -1) {
      setTasksDone(prevState => [...prevState, id]);
    } else {
      setTasksDone(tasksDone.filter(el => el !== id))
    }
  };

  const handleRemoveTask = (id: string) => {
    Alert.alert(
      `Atenção!`, 
      `Tem certeza de que deseja remover esta tarefa?`, 
      [
        {
          text: 'Ok', 
          onPress: () => {
            setTaskList(taskList.filter(el => el.id !== id));
            setTasksDone(tasksDone.filter(el => el !== id));
          }
        },
        {
          text: 'Cancelar', 
          style: 'cancel'
        },
      ]
    )
  };


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
            <TaskItem 
              handleTasksDone={handleTasksDone} 
              item={item} 
              removeTask={handleRemoveTask} 
            />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.taskListContainer}
        />
      </View>      
    </View>
  );
}

export default Home ;