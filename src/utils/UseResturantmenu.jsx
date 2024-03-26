// import React from 'react'
import { useState,useEffect } from 'react';
import { menu_url } from './constants';

const UseResturantmenu = (id) => {

    const[restlist,setRestlist]=useState(null);
    // const menu_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
    const menu_api=menu_url+id;
    // console.log(menu_api);
    useEffect(()=>{
    fetchMenu()
           },[menu_api])
       
       
           const fetchMenu=async()=>{
               const data=await fetch(menu_api);
               const res=await data.json();
               setRestlist(res);
               console.log(res);
           }

  return restlist;
    
   
}

export default UseResturantmenu