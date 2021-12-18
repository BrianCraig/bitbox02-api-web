import { useContext } from "react";
import { Alert, AlertDescription, AlertIcon, Box, Button, List, ListIcon, ListItem, Stack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react"
import { CheckIcon, UnlockIcon, TimeIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { DeviceContext } from "../context/contexts";

const ConnectingBadges = () => {
  let {
    info: {
      version,
      unlocked,
      encrypted
    }
  } = useContext(DeviceContext);
  return <Stack direction={"row"} justify={"end"}>
    {version && <Tag size={"lg"} variant='subtle' colorScheme={'blue'}>
      <TagLabel>Version {version.major}.{version.minor}.{version.patch}</TagLabel>
    </Tag>}
    <Tag size={"lg"} variant='subtle' colorScheme={unlocked ? 'blue' : 'red'}>
      <TagLeftIcon boxSize='12px' as={unlocked ? UnlockIcon : LockIcon} />
      <TagLabel>{unlocked ? "Unlocked" : "Locked"}</TagLabel>
    </Tag>
    <Tag size={"lg"} variant='subtle' colorScheme={encrypted ? 'blue' : 'red'}>
      <TagLeftIcon boxSize='12px' as={encrypted ? ViewOffIcon : ViewIcon} />
      <TagLabel>{encrypted ? "Encrypted" : "Cleartext"}</TagLabel>
    </Tag>
  </Stack>
}

const ConnectingState = () => {
  let { info: {
    version,
    attestation,
    unlocked,
    encrypted,
    deviceAcceptedPairing
  } } = useContext(DeviceContext);
  let color = 'blue.500';
  return <Box rounded={8} padding={4} backgroundColor={"gray.200"}>
    <List spacing={3}>
      <ListItem>
        <ListIcon as={version ? CheckIcon : TimeIcon} color={color} />
        Querying device Info
      </ListItem>
      <ListItem>
        <ListIcon as={attestation ? CheckIcon : TimeIcon} color={color} />
        Attestation Check. Verification not implemented
      </ListItem>
      <ListItem>
        <ListIcon as={unlocked ? CheckIcon : TimeIcon} color={color} />
        Unlocking device
      </ListItem>
      <ListItem>
        <ListIcon as={encrypted ? CheckIcon : TimeIcon} color={color} />
        Encryption handshake
      </ListItem>
      <ListItem>
        <ListIcon as={deviceAcceptedPairing ? CheckIcon : TimeIcon} color={color} />
        Pairing code Verification
      </ListItem>
    </List>
  </Box>
}

export const ConnectingView = () => {
  const { connect, connecting, connected, error } = useContext(DeviceContext);

  return <Stack direction={"column"} maxWidth={540} width={540} margin={4}>
    <ConnectingBadges />
    <ConnectingState />
    {error && <Alert status='error' rounded={8}>
      <AlertIcon />
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>}
    <Button onClick={connect} colorScheme={"blue"} isLoading={connecting} loadingText={"Connecting..."} disabled={connected || connecting}>Connect</Button>
  </Stack>
}
