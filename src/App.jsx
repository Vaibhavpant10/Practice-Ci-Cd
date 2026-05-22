import React, { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Product"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"

import { Routes, Route } from "react-router-dom"

function App() {

  const [cartCount, setCartCount] = useState(0)

  const [cartItems, setCartItems] = useState([])

  return (

    <div>

      <Navbar cartCount={cartCount} />

      <Routes>

        <Route

          path="/"

          element={

            <>

              <Hero />

              <Products
                cartCount={cartCount}
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />

            </>

          }

        />

        <Route

          path="/product/:id"

          element={<ProductDetails />}

        />

        <Route

          path="/cart"

          element={

            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />

          }

        />

      </Routes>

    </div>

  )
}

export default App