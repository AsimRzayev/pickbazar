import {   Button, Flex, Grid, Spinner } from '@chakra-ui/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import BookItem from '../../../components/BookItem'
import BookSection from '../../../components/BookSection'
import { getNewArrivalBooks } from '../../../services/bookService'

const NewBooks = () => {

  
    const {isLoading, data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage}=useInfiniteQuery(["newBooks"],getNewArrivalBooks,{
        getNextPageParam: (lastPage) => lastPage.next,
      })


  if(isLoading){

    return <h1>Loading...</h1>
  }


  return (
    <BookSection heading="New Arrival Books">
      <Grid templateColumns='repeat(5,6fr)' columnGap={4} rowGap={8}> 
      {data &&
          data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.results.map((book) => (
              <BookItem book={book} />
              ))}
            </React.Fragment>
          ))}
      </Grid>
      {hasNextPage && <Flex justifyContent="center" mt={4}>
         <Button colorScheme="green" onClick={fetchNextPage} disabled={isFetchingNextPage}>{isFetchingNextPage?<Spinner/>:"Load More"}</Button>
        </Flex>
      }
    </BookSection>
  )
}

export default NewBooks