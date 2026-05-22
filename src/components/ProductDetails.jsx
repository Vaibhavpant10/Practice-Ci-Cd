import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {

    async function getSingleProduct() {

      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      )

      const data = await response.json()

      setProduct(data)

    }

    getSingleProduct()

  }, [id])

  if (!product) {

    return (

      <h1 className="text-3xl text-center mt-10">
        Loading Product...
      </h1>

    )

  }

  return (

    <div className="p-10">

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-contain"
        />

        <div>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-2xl text-gray-600 mt-5">
            ₹ {product.price}
          </p>

          <p className="mt-5 text-gray-700">
            {product.description}
          </p>

        </div>

      </div>

    </div>

  )
}

export default ProductDetails