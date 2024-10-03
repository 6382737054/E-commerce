import React from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: "John Doe",
    image: `${process.env.PUBLIC_URL}/Images/face.png`,
    text: "The handcrafted mug I ordered was beyond my expectations! The quality and design are exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: `${process.env.PUBLIC_URL}/Images/face.png`,
    text: "I absolutely love the personalized jewelry box! It was the perfect gift for my sister's birthday. Thank you for the wonderful service!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    image: `${process.env.PUBLIC_URL}/Images/face.png`,
    text: "The products are amazing! I bought the artisan soap set, and it smells heavenly. Can't wait to try more products.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    image: `${process.env.PUBLIC_URL}/Images/face.png`,
    text: "Exceptional quality and beautiful designs! I have received many compliments on the items I purchased. Will shop again!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-8">
          Our customers love what we do! Here's what they have to say about their experience with our products and service.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-custom transition-shadow duration-300 p-6 relative overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 15l-5.878 3.09 1.121-6.553L1 6.682l6.549-.955L10 0l2.451 5.727L19 6.682l-4.243 4.855 1.121 6.553z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">{`"${testimonial.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
.shadow-custom {
    box-shadow: 
        0 4px 30px rgba(255, 105, 180, 0.4), /* Darker Light Pink */
        0 8px 30px rgba(255, 145, 190, 0.4), /* Soft Pink */
        0 12px 40px rgba(255, 200, 210, 0.3); /* Light Pink */
}


      `}</style>
    </section>
  );
};

export default TestimonialsSection;
