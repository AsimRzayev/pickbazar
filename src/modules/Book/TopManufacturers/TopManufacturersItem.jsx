import { Avatar, Box, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"
const TopManufacturersItem = ({man}) => {
  return (
    <Flex columnGap={4} w="333px" style={{
        boxShadow:"3px 3px 1px rgba(0,0,0,0.2),-3px -3px 2px rgba(0,0,0,0.2)"
      
    }} my={5} px={4} py={3}  borderRadius="md">
        <Avatar w="63px" h="63px" src={man.logoUrl}/>
        <Box>
            <Heading as="h3" fontSize="md" fontWeight="medium">
            {man.company}
            </Heading>
            <Flex columnGap={2} mt={4}>
                <AiFillFacebook as={Link} href={man.facebook}/>
                <AiFillInstagram as={Link} href={man.instagram}/>
                <AiFillTwitterSquare as={Link} href={man.twitter}/>
            </Flex>
        </Box>
    </Flex>
  )
}

export default TopManufacturersItem