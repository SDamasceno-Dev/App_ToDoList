import { useState } from 'react';
import { View, FlatList } from 'react-native'

import Header from '../../components/Header';
import ListEmpty from '../../components/ListEmpty';
import StatisticsBar from '../../components/StatisticsBar';
import TaskItem from '../../components/TaskItem/item';

import { styles } from './styles'

const Home = () => {
  const [tasksList, setTasksList] = useState([{teste: 'ok'}]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <StatisticsBar />
        <FlatList 
          data={tasksList} 
          ListEmptyComponent={ListEmpty}
          renderItem={TaskItem}
          style={styles.taskListContainer}
        />
      </View>      
    </View>
  );
}

export default Home ;