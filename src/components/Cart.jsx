import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem } from '../utils/cartSlice'
import Itemlist from './Itemlist'
const Cart = () => {
     
  const dispatch = useDispatch()
  const handleClearCart=()=>{
    dispatch(clearItem())
  }
    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems)
  return (
    <div className='textcenter'>
    <h1 className='text2xl'>
        Cart
    </h1>
     <div className='cartw'>
     <button className="btncart" onClick={handleClearCart} >Clear Cart </button>
        {cartItems.length===0 && <h1>Your cart is Empty. Add items to the cart</h1>}
     { cartItems.length!==0 &&  <Itemlist items={cartItems}/>}
    </div> 
        
    </div>
  )
}

export default Cart