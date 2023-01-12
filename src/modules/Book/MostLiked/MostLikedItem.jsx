import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function MostLikedItem({img,heading}) {
    const navigate=useNavigate();
  return (
    <Box w="200px" >
        <Img src={img} alt={heading} title={heading}  mb={2} borderRadius="md" cursor="pointer"/>
        <Heading onClick={()=>navigate("/books/12")}  as="h3" fontSize="medium" fontWeight="medium" _hover={{
        color:"orange"
    }}  cursor="pointer">{heading}</Heading>
    </Box>
  )
}
