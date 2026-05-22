import React from "react"
import { Link } from "react-router-dom"

function ProductCard(props) {

  return (

    <Link
      to={`/product/${props.id}`}
      className="bg-white shadow-lg p-5 rounded-lg block"
    >

      <img
        className="w-full h-[250px] object-cover rounded-lg"
        src={props.image}
        alt={props.title}
      />

      <h2 className="text-lg font-bold mt-3">
        {props.title}
      </h2>

      <p className="text-gray-600 mt-2">
        ₹ {props.price}
      </p>

      <button

        onClick={(e) => {

          e.preventDefault()

          props.setCartCount(props.cartCount + 1)

          props.setCartItems([

            ...props.cartItems,

            {
              id: props.id,
              title: props.title,
              price: props.price,
              image: props.image
            }

          ])

        }}

        className="bg-black text-white px-5 py-2 rounded-lg mt-4"
      >
        Buy Now
      </button>

    </Link>

  )
}

export default ProductCard