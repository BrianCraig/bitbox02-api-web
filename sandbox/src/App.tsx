import './App.css';
import { Button, Center, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { DeviceContext } from './context/contexts';
import { ConnectingView } from './views/ConnectingView';

function App() {
  const { connect, device } = useContext(DeviceContext);

  return (
    <Center h='100vh'>
      <Stack direction={"column"} maxWidth={540} width={540} margin={4}>
        <ConnectingView />
        <Button onClick={connect} colorScheme={"blue"}>Connect</Button>
        <Button onClick={device?.close}>Close</Button>
        <Button onClick={() => device?.eth().then(console.log)}>Eth</Button>
      </Stack>
    </Center>
  );
}

export default App;
