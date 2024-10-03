import React from 'react';

const OurCommunity = () => {
  return (
    <section className="our-community py-10 px-5 bg-gray-100 mt-16"> {/* Added mt-16 for top margin */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5">Our Community</h2>
        <p className="text-center mb-5">
          Join us in making a difference! Our community is dedicated to supporting each other and sharing knowledge.
        </p>
        
        {/* Community Highlights */}
        <div className="community-highlights grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="highlight bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Event 1</h3>
            <p>Description of Event 1...</p>
          </div>
          <div className="highlight bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Event 2</h3>
            <p>Description of Event 2...</p>
          </div>
          <div className="highlight bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Event 3</h3>
            <p>Description of Event 3...</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold mb-2">Join Us!</h3>
          <p>Become a part of our vibrant community. Sign up today!</p>
          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
