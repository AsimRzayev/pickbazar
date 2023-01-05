import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import useComponentVisible from '../hooks'

const SearchInput = () => {
   const {ref,isVisible,setVisible}=useComponentVisible()
   
  return (
    <Flex bg={isVisible?"white":"gray.100"} w="50%" alignItems="center" py={1} px={4} borderRadius="md" border={isVisible?"1px solid green":"none"}
    justifyContent="space-between"
    ref={ref}
    >
        <BiSearch size={24}  />
        <Input type="search"  placeholder='Search...' border="none"  outline="none" _focusVisible={{
            outline:"none",
            border:"none"
        }} 
        onClick={()=>{
            setVisible(true)
        }}
         />
        
    </Flex>
  )
}

export default SearchInput