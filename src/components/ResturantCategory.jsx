// import React, { useState } from 'react'
 import { FaArrowDown } from "react-icons/fa";
 import { FaArrowUp } from "react-icons/fa";
 import Itemlist from './Itemlist';
const ResturantCategory = ({data,showItem,setshowIndex,dummy}) => {
  // const[showItem,setShowItem]=useState(false)
  console.log(dummy);
  const handleItems=()=>{
    setshowIndex()
  }
  
  return (
    <>
    <div className='cat-con'>
      <div className='cat-pointer' onClick={handleItems}>
        <span className='span-tit'>{data.title}({data.itemCards.length})
        </span>
       {showItem?<span>< FaArrowUp/></span>:<span><FaArrowDown/></span>}
        </div>
      
       {showItem && <Itemlist items={data.itemCards} dummy={dummy}/>}
      
        </div>
        </>

  )
}

export default ResturantCategory