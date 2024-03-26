import React from 'react'
//import Body from './Body'
import { image } from '../utils/constants'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'
const Resturantcard = (props) => {
    console.log(props)
    // const image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  
    const {loggedInUser} = useContext(UserContext)
    
    const{cloudinaryImageId,name,costForTwo,cuisines,avgRating}=props.resData.info
 return (
  
  <div className='res-info'>
<img className="image-logo" src={image+cloudinaryImageId} alt=""/>
<h1>{name}</h1>
<h3>{cuisines[0]}</h3>
<h3>{avgRating}</h3>
<h3>{costForTwo}</h3>
<h6>{loggedInUser}</h6>

    </div>
  )
}


export const withveglabel=(Resturantcard)=>{
  return(props)=>{
    
    return(<div>
<label className='veg-label'>veg</label>
<Resturantcard {...props}/>
    </div>)
  }
}

export default Resturantcard