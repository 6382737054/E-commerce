import React from 'react';

const GallerySection = () => {
  const images = [
    `${process.env.PUBLIC_URL}/Images/galleryl.png`,
    `${process.env.PUBLIC_URL}/Images/gallery.png`,
    `${process.env.PUBLIC_URL}/Images/gallery.png`,
    `${process.env.PUBLIC_URL}/Images/galleryl.png`,
    `${process.env.PUBLIC_URL}/Images/gallery.png`,
    `${process.env.PUBLIC_URL}/Images/gallery.png`,
    `${process.env.PUBLIC_URL}/Images/galleryl.png`,
    `${process.env.PUBLIC_URL}/Images/galleryl.png`,
    `${process.env.PUBLIC_URL}/Images/gallery.png`,
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our creative works and stunning visuals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index % 2 === 0 ? 'row-span-2' : ''
              }`}
              style={{ minHeight: '200px' }} // Ensures consistent height
            >
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                style={{ opacity: 1 }} // Ensures no flickering during loading
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xl font-semibold">Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
