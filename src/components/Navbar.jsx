import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar({cartCount}) {

  const [showMenu, setShowMenu] = useState(false)

  return (

    <nav className="bg-yellow-500 p-5 relative">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Shop
        </h1>

        {/* Laptop Menu */}
        <ul className="hidden lg:flex gap-5 text-lg">

  <li>
    <Link to="/">
      Home
    </Link>
  </li>

  <li>
    <Link to="/product">
      Products
    </Link>
  </li>

  <li>
    <Link to="/cart">
      Cart ({cartCount})
    </Link>
  </li>

</ul>

        {/* Mobile Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {
        showMenu && (

          <ul className="flex flex-col items-center gap-5 mt-5 lg:hidden">

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>

            </li>
            <li>
              <Link to= "/cart">
                Cart ({cartCount})
              
              </Link>
            </li>

          </ul>

        )
      }

    </nav>

  )
}

export default Navbar