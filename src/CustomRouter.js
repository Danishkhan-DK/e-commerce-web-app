import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Carting from "./components/Carting";
import Nav from "./components/Nav";
import React  from 'react';
import Ghee from "./components/Ghee";
import Tea from "./components/Tea";
import Fruits from "./components/Fruits";
import Nandini from "./components/Nandini";
import Shopby from "./components/Shopby";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Smartbasket from "./components/Smartbasket";
import Login from "./components/Login";
import Signup from "./components/Signup";

  const CustomRouter = ({cartCount, addToCart}) => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout cartCount={cartCount} />,
        children: [
          {
            path:"/",
            element:(
              <>
              <Banner/>
              <Categories/>
              <Product addToCart={addToCart}/>
            
              </>
            ),
          },
      
      {
        path: "/carting",
        element: <Carting cartCount={cartCount}/>,
      },
      {
        path:"/ghee",
        element:<Ghee addToCart={addToCart}/>
      },
      {
        path:"/tea",
        element:<Tea addToCart={addToCart}/>
      },
      {
        path:"/fruits",
        element:<Fruits addToCart={addToCart}/>
      },
      {
        path:"/nandini",
        element:<Nandini addToCart={addToCart}/>
      },
      {
        path:"/shopby",
        element:<Shopby/>
      },
      {
        path:"/smartbasket",
        element:<Smartbasket addToCart={addToCart}/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/signup",
        element: <Signup/>
      },
        ]
      }
    ])

    return (
      <RouterProvider router={router} />
    )
  }
  
  export default CustomRouter