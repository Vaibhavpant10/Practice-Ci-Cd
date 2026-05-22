import React from "react"

function Cart({ cartItems, setCartItems }) {

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        My Cart
      </h1>

      {
        cartItems.length === 0 ? (

          <h2 className="text-2xl">
            Cart is Empty
          </h2>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {
              cartItems.map((item) => {

                return (

                  <div
                    key={item.id}
                    className="shadow-lg p-5 rounded-lg"
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] object-cover"
                    />

                    <h2 className="text-xl font-bold mt-4">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-gray-600">
                      ₹ {item.price}
                    </p>

                    <button

                      onClick={() => {

                        const updatedCart = cartItems.filter((product) => {

                          return product.id !== item.id

                        })

                        setCartItems(updatedCart)

                      }}

                      className="bg-red-500 text-white px-5 py-2 rounded-lg mt-4"
                    >

                      Remove

                    </button>

                  </div>

                )

              })
            }

          </div>

        )
      }

    </div>

  )
}

export default Cart