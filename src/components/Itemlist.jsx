import React, { useContext } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { image } from '../utils/constants';
import UserContext from '../utils/UserContext';
import {useDispatch} from "react-redux"
import { addItem } from '../utils/cartSlice';
const Itemlist = ({items,dummy}) => {
    console.log(dummy)
    const {loggedInUser}=useContext(UserContext)
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
      console.log(item)
      dispatch(addItem(item))

    }
  return (
    <div className=''>
        {items.map((item)=>(
        <div className='item-con' 
        key={item.card.info.id}>
<div className='span-con'>
        <div className='span-p'>
        <span className='span-title'>{item.card.info.name}</span>
        <p>{dummy}</p>
        <span className='fa-con'><FaRupeeSign className="fasign"/>{item.card.info.price?item.card.info.price / 100: item.card.info.defaultPrice/100}</span>
        <span>{loggedInUser}</span>
        </div>
        <p className='span-text'>{item.card.info.description}</p>        
        </div>
        <div className='btn-con'>
            <div><button className='btn-add' onClick={()=>handleAddItem(item)}>ADD+</button>
      {item.card.info.imageId && <img src={image+item.card.info.imageId} alt="" className='img-des'/>}
      
      </div>
    

        </div>
        
    </div>
    
  )
        )
}
</div>)}
export default Itemlist;