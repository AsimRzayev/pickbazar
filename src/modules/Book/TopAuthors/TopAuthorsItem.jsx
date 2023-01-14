import { Avatar, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const TopAuthorsItem = ({author}) => {
  return (
    <Box>
        <Avatar name={author.firstName} src={author.imageUrl} w="168px" h="168px" outline="4px solid white"  shadow="md"/>

        <Heading as="h3" fontSize="sm" fontWeight="medium" mt={8}>{author.firstName}&nbsp;{author.lastName}</Heading>
    </Box>
  )
}

export default TopAuthorsItem