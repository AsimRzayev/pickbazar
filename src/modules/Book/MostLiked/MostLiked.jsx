import { Flex, Image } from '@chakra-ui/react'
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
    <Flex justifyContent="space-between"  mt={8}>
      <Image src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1683%2FCombo_banner_02.png&w=1920&q=75"  w="25%"/>
      <Image  src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1685%2FCombo_banner_01.png&w=1920&q=75" w="45%"/>
      <Image src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1687%2FCombo_banner_03.png&w=1920&q=75" w="25%" />
    </Flex>
    </BookSection>
  )
}
