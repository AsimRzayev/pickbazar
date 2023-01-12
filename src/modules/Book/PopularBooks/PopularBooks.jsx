import {  Grid } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BookItem from '../../../components/BookItem'
import BookSection from '../../../components/BookSection'
import { getPopularBooks } from '../../../services/bookService'

const PopularBooks = () => {

  const {data:popularBooks,isLoading} = useQuery(["getPopularBooks"],getPopularBooks)

  if(isLoading){

    return <h1>Loading...</h1>
  }

  return (
    <BookSection heading="Popular Books">

      <Grid templateColumns='repeat(5,6fr)' columnGap={4} rowGap={8}> 
        {popularBooks.map(book=><BookItem book={book} />)}
      </Grid>
     
    </BookSection>
  )
}

export default PopularBooks