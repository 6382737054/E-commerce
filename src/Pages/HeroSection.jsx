import React, { useState } from 'react';

// Sample products with images sourced from the public directory
const featuredProducts = [
  {
    name: "Handcrafted Ceramic Mug",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$24.99",
    rating: 4.5,
    description: "A beautiful handcrafted mug made from fine ceramic, perfect for your morning coffee."
  },
  {
    name: "Personalized Wooden Jewelry Box",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$39.99",
    rating: 5.0,
    description: "Keep your precious items safe in this elegant personalized wooden jewelry box."
  },
  {
    name: "Custom Engraved Photo Frame",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$29.99",
    rating: 4.0,
    description: "Capture your memories in a custom engraved photo frame, perfect for gifting."
  },
  {
    name: "Handmade Leather Wallet",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$49.99",
    rating: 4.8,
    description: "Stylish and functional, this handmade leather wallet is perfect for any occasion."
  },
  {
    name: "Artisan Soap Set",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$19.99",
    rating: 4.6,
    description: "A delightful set of artisan soaps, perfect for a pampering gift."
  },
  {
    name: "Woven Blanket",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$59.99",
    rating: 5.0,
    description: "Stay cozy with this beautiful woven blanket, ideal for chilly evenings."
  },
  {
    name: "Handcrafted Wooden Coasters",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$14.99",
    rating: 4.2,
    description: "Protect your surfaces with these beautifully handcrafted wooden coasters."
  },
  {
    name: "Stylish Canvas Tote Bag",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$22.99",
    rating: 4.7,
    description: "Carry your essentials in style with this eco-friendly canvas tote bag."
  },
  {
    name: "Decorative Plant Pot",
    image: `${process.env.PUBLIC_URL}/Images/gift.png`,
    price: "$34.99",
    rating: 4.4,
    description: "Add a touch of elegance to your space with this decorative plant pot."
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative bg-pink-50 overflow-hidden pt-3">
      {/* Hero Content Section */}
      <div
        className="relative w-full h-[80vh] sm:h-[70vh] lg:h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/HeroImage.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="relative z-10 text-left text-white px-4 sm:px-8 lg:px-12 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl ml-4 sm:ml-8 lg:ml-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-wide drop-shadow-lg text-yellow-300 transform transition duration-500 hover:scale-105">
            Discover Unique Handcrafted Gifts
          </h1>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold italic drop-shadow-md flex items-center text-pink-400">
            <span className="mr-2">🎨</span> Inspired Art
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-xl leading-relaxed text-gray-800">
            Find the perfect gift for every occasion, made with care and love by artisans.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button className="w-full sm:w-1/2 bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 sm:py-2 rounded-lg text-lg font-medium shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
            <button className="w-full sm:w-1/2 border-2 border-gray-300 text-gray-800 px-3 sm:px-4 py-2 sm:py-2 rounded-lg text-lg font-medium bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-12 bg-gradient-to-r from-wheat to-white">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 px-4 sm:px-8 lg:px-16">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-8 lg:px-16">
          {featuredProducts.slice(activeIndex * 3, activeIndex * 3 + 3).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-transform duration-300 transform scale-95 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">{product.description}</p>
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5.878 3.09 1.121-6.553L1 6.682l6.549-.955L10 0l2.451 5.727L19 6.682l-4.243 4.855 1.121 6.553z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-800">{product.price}</p>
                <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm sm:text-base flex items-center justify-center">
                  <span className="mr-2">🛒</span> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
