import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Carting from "./components/Carting";
// import Nav from "./components/Nav";
import React  from 'react';
import Ghee from "./components/Ghee";
import Tea from "./components/Tea";
import Fruits from "./components/Fruits";
import Nandini from "./components/Nandini";
import Shopby from "./components/Shopby";
// import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Smartbasket from "./components/Smartbasket";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./ContextApi/AuthContext";
import Logprofile from "./components/Logprofile";

  const CustomRouter = ({cartItems, addToCart, addToCartCount, cardCount}) => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout cartItems={cartItems} />,
        // element: <Layout cardCount={cardCount}  />,
        children: [
          {
            path:"/",
            element:(
              <>
              <Banner/>
              <Categories/>
              <Product addToCart={addToCart} addToCartCount={addToCartCount}/>
            
              </>
            ),
          },
      
      {
        path: "/carting",
        // element: <Carting cartCount={cartCount}/>,
        element: <Carting cartItems={cartItems}/>,
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
      {
        path:"/logprofile",
        element: <Logprofile/>
      },
        ]
      }
    ])

    return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    )
  }
  
  export default CustomRouter