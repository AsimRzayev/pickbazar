import { GridItem, Heading, Img,Text,Link } from '@chakra-ui/react'
import React from 'react'
import {  Link as RouterLink } from 'react-router-dom'
import { calculateDiscount } from '../utils/books'

const BookItem = ({book}) => {
  return (
    <GridItem>
        <Img src={book.imageUrl} h="500px" alt="Book 1" borderRadius="md" />
       <Link as={RouterLink} to="/books/1"> 

        <Heading as="h1" fontSize="md" fontWeight="medium"  color="gray.900" mt={4} transition=".2s color linear" _hover={{
            color:"orange.600"
        }}> 
            {book.name}
        </Heading>
     </Link>



        <Text as="p" color="gray.400" fontSize="sm" mt={2}> 
            by   <Link as={RouterLink} to="/books/1" color="gray.600" transition=".2s color linear" _hover={{
            color:"orange.600"
        }} >   {book.author}</Link>
        </Text>
     
      {!book.hasDiscount?<Text as="p" fontSize="md" mt={2} color="gray.900" >
            <Text as="span" color="orange.600">${book.startPrice}</Text> - <Text as="span" color="orange.600">${book.endPrice}</Text> 
            </Text>
            : 
            <Text as="p" display="flex" columnGap={2} alignItems="center" mt={2} color="gray.900" >
                <Text as="span" color="orange.600">${book.startPrice}</Text><Text as="del" fontSize="xs" fontWeight="medium" color="gray.400">${book.endPrice}</Text><Text as="span"  fontSize="xs" color="green">(Save {Math.round(calculateDiscount(book.startPrice,book.endPrice))}%)</Text> 
            </Text>  
            }  

    </GridItem>
  )
}

export default BookItem