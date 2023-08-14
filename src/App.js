import React from "react";
import Home from "./components/Home";
import Header from './components/Header'

import {createBrowserRouter, Outlet,RouterProvider,ScrollRestoration} from "react-router-dom"



const Layout =()=>{

  return( 
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
   {  path:"/",
     element:<Home/>},
     
    ],
  },
])


function App() {
  return (
    <div className="font-bodyFont">
    <RouterProvider router={router}/>
    </div>
 
  );
}

export default App;
