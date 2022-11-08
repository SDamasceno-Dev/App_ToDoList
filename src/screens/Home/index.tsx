import { Text, View } from 'react-native'

import Header from '../../components/Header';

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default Home ;