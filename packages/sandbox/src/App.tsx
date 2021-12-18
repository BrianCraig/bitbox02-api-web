import './App.css';
import { Center } from '@chakra-ui/react';
import { useContext } from 'react';
import { DeviceContext } from './context/contexts';
import { ConnectingView } from './views/ConnectingView';
import { MessagesView } from './views/MessagesView';

function App() {
  const { connected } = useContext(DeviceContext);

  return (
    <Center h='100vh'>
      { connected ? <MessagesView /> : <ConnectingView /> }
    </Center>
  );
}

export default App;
