import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

//App layout Component to render : Header , Outlet(it contains children component like body , About , Restaurant Menu etc) and Footer Component

const AppLayout=()=>{
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  );
};

//call createBrowserRouter for routing different pages
const appRouter=createBrowserRouter([
  {
    path:"/",//show path for routing 
    element:<AppLayout/>,//show component for particular path 
    errorElement:<Error/>,//show error component for path is different
    children:[
      //show different component for routing 
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>) // render RouteProvider and use render as props and pass value appRouter
