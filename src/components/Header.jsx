import React, { useContext, useState } from 'react'
import { Logo_url } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector} from 'react-redux'
const Header = () => {
  const[btn,setBtn]=useState("login");
  const onlineStatus=useOnlineStatus();
  const{loggedInUser}=useContext(UserContext)
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
  return (
    <>
    <div className='Header-section'>
        <img className="img-logo" src={Logo_url} alt=""/>
       
        <ul className='ul-items'>
          <li className='li-items'>onlinestatus:{onlineStatus ? "🤑" : "🔴😡"}</li>
        <li className='li-items'><Link to="/home" className='custom-link'>Home</Link>  
        </li> 
            <li className='li-items'> <Link to="/about" className='custom-link'>About us</Link></li>
            <li className='li-items'><Link to="/contact" className='custom-link'>Contact us</Link></li>
            <li className='li-items'><Link to="/grocery" className='custom-link'>Grocery</Link></li>
            <li className='li-items'><Link to="/services" className='custom-link'>Services</Link></li>
            <li className='li-items'><Link to="/cart">Cart-{cartItems.length}items</Link></li>
            <button className="btn" onClick={()=>btn==="login"?setBtn('logout'):setBtn("login")}>{btn}</button>
        <li className='li-items'>{loggedInUser}</li>
        </ul>

        </div>
        </>
  )
}

export default Header