export const Fotter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Address Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">
            HouseR Pvt. Ltd.<br />
            1234 Innovation Street,<br />
            Tech City, IN - 110001<br />
            Email: contact@houser.com<br />
            Phone: +91 9876543210
          </p>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        {/* About or Description Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About HouseR</h2>
          <p className="text-sm">
            HouseR is committed to making property browsing and management simple, secure, and accessible for all. Your dream home is just a click away!
          </p>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HouseR. All rights reserved.
      </div>
    </footer>
  );
};
