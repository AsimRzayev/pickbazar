import {  Box, Flex, Heading, Img, Link ,Icon} from '@chakra-ui/react'
import React from 'react'
import BannerImg from "../../asssets/banner/banner.png"
import {BsChevronDoubleRight} from "react-icons/bs"
const Banner = () => {
  return (
    <Flex bgGradient="linear(to-l,#acb6e5,#86fde8)" w="full" h="70vh" borderRadius="xl" alignItems="center" justifyContent="center">
     <Flex w="80%" h="75%" justifyContent="space-between" alignItems="center" >
        <Box w="40%" color="white">
            <Heading as="h2" fontSize="4xl">SALES UP TO 20%</Heading>
            <Heading as="h1" my={4}  fontSize="5xl">MEET YOUR NEXT <br/> FAVOURITE BOOKS</Heading>
            <Link href='#'>Shop now <Icon ml={4} as={BsChevronDoubleRight}/></Link>
        </Box>
        <Img src={BannerImg} w="40%" alt="Banner" />
     </Flex>
    </Flex>
  )
}

export default Banner