import Error from './components/Error';
import {Provider} from "react-redux"
import appStore from './utils/store';
import { lazy,Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
// import Home from './components/Home';
import { Outlet, createBrowserRouter } from 'react-router-dom';
// import About from './components/About';
import React from "react";
// import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
// import  Services from "./components/Services";
import Body from './components/Body';
import Resturantmenu from './components/Resturantmenu';
import UserContext from './utils/UserContext';
import Cart from './components/Cart';
const Home=lazy(()=>import('./components/Home'))
const About=lazy(()=>import('./components/About'))
const Contact =lazy(()=>import("./components/Contact"))
const Grocery =lazy(()=>import("./components/Grocery"))
const  Services =lazy(()=>import("./components/Services"))

function App() {
  const[userInfo,setUserInfo]=useState()

  useEffect(()=>{
    const data={
      name:"Welcome to Anuhya"
    }
    setUserInfo(data.name)
  },[])
  return (<div>
    <Provider store={appStore}>
    
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <UserContext.Provider value={{loggedInUser:userInfo}}>

    <Header/>
    </UserContext.Provider>
    <Outlet/>
    </UserContext.Provider>
    </Provider>
    
  </div>)
}
export const appRouter= createBrowserRouter([
  {
       path:'/',
       element : <App />,
       children:[
        {

          path:"/",
          element:<Body/>
        },
        {

          path:"/home",
          element:<Suspense fallback={<h1>services are loading....</h1>}><Home/></Suspense>
        },
        {
          path:"/about",
          element:<Suspense><About/></Suspense>
        },
        {
          path:"/contact",
          element:<Suspense><Contact/></Suspense>

        },
        {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      },
      {
        path:"/services",
        element:<Suspense>< Services/></Suspense>
      },

      {
        path:"/cart",
        element: <Cart />
    },

      {
        path:"/restutants/:id",
        element:<Resturantmenu/>
      }
      ],
      errorElement:<Error/>
}])

export default App;
