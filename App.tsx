import { StatusBar } from 'react-native';
import Home from './src/screens/Home'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Home />
    </>
  );
}

export default App;