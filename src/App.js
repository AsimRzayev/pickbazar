import { Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './modules/Book/Banner';

function App() {
  return (
      <>
        <Navbar/>
        <Stack spacing={8} w="92%" mx="auto" mt={8}>
          <Banner/>
        </Stack>
      </>
  );
}

export default App;
