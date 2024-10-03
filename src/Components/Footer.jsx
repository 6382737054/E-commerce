import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure you import Font Awesome if using npm

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 mt-auto"> {/* Reduced padding from py-5 to py-3 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to delivering top-notch products and services to our valued customers. Browse our gallery and experience the quality yourself.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/home" className="hover:text-gray-300 transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-gray-300 transition">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-gray-300 transition">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email: support@example.com <br />
              Phone: +123-456-7890 <br />
              Address: 123 Street, City, Country
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-800 pt-4 text-center"> {/* Reduced margin-top and padding */}
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
