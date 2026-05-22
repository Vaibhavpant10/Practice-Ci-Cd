import React from "react"

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">

      {/* Left Side */}
      <div className="space-y-5">

        <h1 className="text-4xl lg:text-6xl font-bold">
          Big Fashion Sale
        </h1>

        <p className="text-gray-600 text-lg">
          Discover amazing products at the best price.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>

      </div>

      {/* Right Side */}
      <div>
        <img
          className="w-[300px] lg:w-[500px] rounded-lg"
          src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
          alt="fashion"
        />
      </div>

    </section>
  )
}

export default Hero