import { StatusBar } from 'react-native';
import Home from './src/screens/Home'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#0D0D0D' />
      <Home />
    </>
  );
}

export default App;