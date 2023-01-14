import React from 'react'
import BookSection from '../../../components/BookSection'
import Slider from '../../../components/Slider/Slider'
import {  SwiperSlide } from "swiper/react";
import TopManufacturersItem from './TopManufacturersItem';
import { useQuery } from '@tanstack/react-query';
import { getManufacturers } from '../../../services/bookService';
import { Spinner } from '@chakra-ui/react';

const TopManufacturers = () => {
    const {data:manus,isLoading}=useQuery(["topManus"],getManufacturers)
    
  if(isLoading){
    return <Spinner/>
  }
  return (
    <BookSection heading="Top Manufacturers">
        <Slider slidesPerView={5} spaceBetween={10}>
            {manus.map(manu=> <SwiperSlide key={manu.id}>
                <TopManufacturersItem man={manu}/>
            </SwiperSlide>)}
       
        </Slider>
    </BookSection>
  )
}

export default TopManufacturers