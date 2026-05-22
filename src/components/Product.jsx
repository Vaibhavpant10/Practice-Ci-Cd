import React, { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

function Products({
  cartCount,
  setCartCount,
  cartItems,
  setCartItems
}) {

  const [search, setSearch] = useState("")

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function getProducts() {

      const response = await fetch(
        "https://fakestoreapi.com/products"
      )

      const data = await response.json()

      setProducts(data)

    }

    getProducts()

  }, [])

  return (

    <div>

      <div className="p-10">

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 w-full rounded-lg"
        />

      </div>

      {
        products.length === 0 && (

          <h1 className="text-3xl text-center">
            Loading Products...
          </h1>

        )
      }

      <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          products

            .filter((item) => {

              return item.title
                .toLowerCase()
                .includes(search.toLowerCase())

            })

            .map((item) => {

              return (

                <ProductCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />

              )

            })
        }

      </section>

    </div>

  )
}

export default Products