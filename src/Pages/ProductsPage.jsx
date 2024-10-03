import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ProductsPage = () => {
  const [products] = useState([
    { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 4.5, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 2, name: 'Smartphone', price: 799.99, rating: 4.0, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 3, name: 'Smartwatch', price: 199.99, rating: 3.5, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 4, name: 'Laptop', price: 999.99, rating: 4.8, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 5, name: 'Tablet', price: 299.99, rating: 4.2, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 6, name: 'Camera', price: 499.99, rating: 4.7, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 7, name: 'Bluetooth Speaker', price: 59.99, rating: 4.1, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 8, name: 'Gaming Console', price: 399.99, rating: 4.9, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 9, name: 'Fitness Tracker', price: 149.99, rating: 3.8, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 10, name: 'Drone', price: 699.99, rating: 4.4, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 11, name: 'VR Headset', price: 299.99, rating: 4.6, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 12, name: 'Smart Home Hub', price: 129.99, rating: 4.3, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 13, name: 'Action Camera', price: 249.99, rating: 4.5, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 14, name: '4K Monitor', price: 799.99, rating: 4.2, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 15, name: 'Wireless Mouse', price: 49.99, rating: 3.9, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 16, name: 'Gaming Chair', price: 199.99, rating: 4.8, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 17, name: 'External Hard Drive', price: 89.99, rating: 4.1, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 18, name: 'Noise Cancelling Earbuds', price: 129.99, rating: 4.6, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 19, name: 'Laptop Stand', price: 39.99, rating: 4.3, image: `${process.env.PUBLIC_URL}/Images/product.png` },
    { id: 20, name: 'Mechanical Keyboard', price: 149.99, rating: 4.7, image: `${process.env.PUBLIC_URL}/Images/product.png` },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter products based on search and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0; // Default: no sorting
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
<div className="bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 py-10 px-4 lg:px-20 mt-16">

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          className="w-full p-3 rounded-lg border focus:outline-none focus:border-blue-500"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
      </div>
      {/* Filter & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="flex space-x-4 mb-4 sm:mb-0">
          {/* Price Range Filter */}
          <select
            className="p-2 rounded-lg border focus:outline-none"
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              setPriceRange([min, max]);
              setCurrentPage(1); // Reset to first page on price range change
            }}
          >
            <option value="0-1000">Price Range</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-1000">$200+</option>
          </select>

          {/* Sort */}
          <select
            className="p-2 rounded-lg border focus:outline-none"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1); // Reset to first page on sort change
            }}
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-gradient-to-r from-white via-gray-100 to-white rounded-lg shadow-md p-4 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
            <div className="flex justify-center mt-2">
              <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="text-gray-400">
                {'★'.repeat(5 - Math.floor(product.rating))}
              </span>
            </div>
            <button className="bg-pink-200 text-black rounded-lg px-4 py-2 mt-4 flex justify-center items-center w-full hover:bg-yellow-400 transition duration-200">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>

            {/* Social Sharing Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://instagram.com/?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://wa.me/?text=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-300 rounded-full px-4 py-2 mr-2 hover:bg-gray-400 transition duration-200 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-300 rounded-full px-4 py-2 ml-2 hover:bg-gray-400 transition duration-200 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
