import { Stack } from '@chakra-ui/react';

import React from 'react';
import Navbar from './components/Navbar';
import Banner from './modules/Book/Banner';
import MostLiked from './modules/Book/MostLiked/MostLiked';
import NewBooks from './modules/Book/NewBooks/NewBooks';
import PopularBooks from './modules/Book/PopularBooks/PopularBooks';
import TopAuthors from './modules/Book/TopAuthors/TopAuthors';
import TopManufacturers from './modules/Book/TopManufacturers/TopManufacturers';
 


function App() {
  const [state,setState]=React.useState(0);
  return (
      <>
        <button data-testid="btn"  onClick={()=>setState(prev=>prev+1)}>{state}</button>
        <Navbar/>
        <Stack spacing={8} w="92%" mx="auto" mt={10}>
          <Banner/>
          <PopularBooks/>
          <MostLiked/>
          <NewBooks/>
          <TopAuthors/>
          <TopManufacturers/>
            
        </Stack>
        loremasl;dnlsadnaslkdmasl;d,asl;d,;asl,d;lsa
      </>
  );
}

export default App;
