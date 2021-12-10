import './App.css';
import { Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import { FunctionComponent, useContext } from 'react';
import { DeviceContext } from './context/contexts';

const DeviceInfo: FunctionComponent = () => {
  const { info } = useContext(DeviceContext);
  if (!info) return null;

  const {
    version: { major, minor, patch },
    platformId,
    editionId,
    unlocked
  } = info;

  return <Text>Connected, version {major}.{minor}.{patch} platform: {platformId} edition: {editionId} unlocked: {unlocked ? "yes" : "no"}</Text>
}

function App() {
  const { connect } = useContext(DeviceContext);

  return (
    <Center h='100vh'>
      <Stack direction={"column"}>
        <Heading>BitBox 02 WebHID</Heading>
        <DeviceInfo />
        <Button onClick={connect}>Connect</Button>
      </Stack>
    </Center>
  );
}

export default App;
