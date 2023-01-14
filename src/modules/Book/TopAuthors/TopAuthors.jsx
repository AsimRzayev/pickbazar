
import React from 'react'
import {  SwiperSlide } from "swiper/react";



import TopAuthorsItem from './TopAuthorsItem';
import BookSection from '../../../components/BookSection';
import Slider from '../../../components/Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import { getAuthors } from '../../../services/bookService';
import { Spinner } from '@chakra-ui/react';

const TopAuthors = () => {

  const {data:authors,isLoading}=useQuery(["topAuthors"],getAuthors)

  if(isLoading){
    return <Spinner/>
  }

  return (
    <BookSection heading="Top Authors">
    <Slider slidesPerView={7} spaceBetween={30}>

    {authors.map(author=>
    <SwiperSlide key={author.id}><TopAuthorsItem  author={author}/></SwiperSlide>)}

    </Slider>
  </BookSection>
  )
}

export default TopAuthors