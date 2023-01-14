import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const BookSection = ({heading,children}) => {
  return (
    <Box py={4}  >
        <Heading fontSize="3xl" fontWeight="medium" mb={6}>{heading}</Heading>
        {children}
    </Box>
  )
}

export default BookSection