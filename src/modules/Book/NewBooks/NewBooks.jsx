import {   Button, Flex, Grid } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BookItem from '../../../components/BookItem'
import BookSection from '../../../components/BookSection'
import { getNewArrivalBooks } from '../../../services/bookService'

const NewBooks = () => {

  const [count,setCount]=React.useState(0);

  const [nBooks,setnBooks]=React.useState([]);

  const {data:newBooks,isLoading,isSuccess} = useQuery(["getNewArrivalBooks",count],()=>getNewArrivalBooks(count))

  React.useEffect(()=>{
    if(isSuccess){
      setnBooks((prev)=>[...prev,...newBooks])
    }
   },[isSuccess,newBooks])

const changeData=()=>{
  setCount((prev)=>prev+2);
}


  if(isLoading){

    return <h1>Loading...</h1>
  }


  return (
    <BookSection heading="New Arrival Books">
      <Grid templateColumns='repeat(5,6fr)' columnGap={4} rowGap={8}> 
        {nBooks?.map(book=><BookItem book={book} />)}
      </Grid>
      <Flex justifyContent="center" mt={4}>
          <Button colorScheme="green" onClick={changeData}>Load More</Button>
        </Flex>
    </BookSection>
  )
}

export default NewBooks