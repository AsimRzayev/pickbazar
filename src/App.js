import { Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './modules/Book/Banner';
import NewBooks from './modules/Book/NewBooks/NewBooks';
import PopularBooks from './modules/Book/PopularBooks/PopularBooks';

function App() {
  return (
      <>
        <Navbar/>
        <Stack spacing={8} w="92%" mx="auto" mt={10}>
          <Banner/>
          <PopularBooks/>
          <NewBooks/>
        </Stack>
      </>
  );
}

export default App;
