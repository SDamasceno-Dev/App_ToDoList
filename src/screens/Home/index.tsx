import { useState } from 'react';
import { View, FlatList } from 'react-native'

import Header from '../../components/Header';
import StatisticsBar from '../../components/StatisticsBar';

import { styles } from './styles'

const Home = () => {
  const [tasksList, setTasksList] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={tasksList} 
        ListHeaderComponent={StatisticsBar} 
        renderItem={<View />}
        style={styles.taskListContainer}
      />
    </View>
  );
}

export default Home ;