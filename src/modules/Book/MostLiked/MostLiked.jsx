import { Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BookSection from '../../../components/BookSection'
import { getMostLikedBooks } from '../../../services/bookService'
import MostLikedItem from './MostLikedItem'

export default function MostLiked() {
     const {data,isLoading}=useQuery(["mostliked"],getMostLikedBooks)
     if(isLoading){
        return <h1>Loading...</h1>
     }
  return (
    <BookSection heading="Which Book You Like to See?">
    <Flex columnGap={4}>
        {data.map(book=> <MostLikedItem key={book.id} img={book.imageUrl} heading={book.name} />)}
    </Flex>
    </BookSection>
  )
}
