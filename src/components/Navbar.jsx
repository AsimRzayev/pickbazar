import { Box, Button, Flex, Img, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import PickBazarIcon from "../asssets/icons/PickBazar.webp";
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import { GrBasket } from "react-icons/gr"
import {BsChevronUp,BsChevronDown} from "react-icons/bs"

const linkList=["Grocery","Bakery","Makup","Clothes","Books"];

const Navbar = () => {
    const [selectedLink,setSelectedlink]=React.useState("Books");
  return (
    <Flex py={6} px={8} boxShadow="base" alignItems="center" justifyContent="space-between">
        <Link>
            <Img src={PickBazarIcon} w="140px" alt="Pick bazar"/>
        </Link>
        <Flex mt={1} columnGap={4}>
            <Link as={NavLink} to="/shops" textDecoration="none" _hover={{
                color:"green"
            }}>Shops</Link>
            <Link as={NavLink} to="/offers" textDecoration="none" _hover={{
                color:"green"
            }}>Offers</Link>
            <Link as={NavLink} to="/faq" textDecoration="none" _hover={{
                color:"green"
            }}>Faq</Link>
            <Link as={NavLink} to="/contact" textDecoration="none" _hover={{
                color:"green"
            }}>Contact</Link>
        </Flex>
        <SearchInput />
        <Menu>
        {({ isOpen }) => (
            <>
            <MenuButton py={2} bg="gray.100" _active={{
                bg:"gray.100"
            }} as={Button} rightIcon={isOpen?<BsChevronUp/> :<BsChevronDown/>}>
                {selectedLink}
            </MenuButton>
            <MenuList >
               {linkList.map(listItem=><MenuItem  as={NavLink} to={`/${listItem.toLowerCase()}`} key={listItem}
                onClick={()=>setSelectedlink(listItem)}
               >     
                {listItem}</MenuItem>)}
            </MenuList>
            </>
        )}
        </Menu>
        <Box position="relative" >
            <GrBasket size={24}/>
            <Text position="absolute" display="inline-block" bg="green" px={2} fontSize="xs" color="white" borderRadius="xl" right="-10px" top="-8px" >2</Text>
        </Box>
        <Flex columnGap={4}>
            <Button as={NavLink} to="/sregister" size="sm" colorScheme="green" >Became a Seller</Button>
            <Button as={NavLink} to="/join" size="sm"  colorScheme="green">Join</Button>
         </Flex>
    </Flex>
  )
}

export default Navbar