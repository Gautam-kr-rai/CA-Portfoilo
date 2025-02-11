import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            At <span className="text-white font-semibold">Tushar Tejpal Garg & Associates</span>, we provide top-tier financial, taxation, and compliance services. Founded by CA Tushar Garg, we specialize in tailored solutions for individuals, businesses, and organizations.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="http://facebook.com/catushar.garg" className="flex items-center space-x-2 hover:text-white transition duration-300">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/catushar.garg" className="flex items-center space-x-2 hover:text-white transition duration-300">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm leading-relaxed">
            Shiv Colony, Near Railway Station, Kosli, Distt- Rewari, Haryana-123302
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Email:</span> <a href="mailto:catushar2024@gmail.com" className="hover:text-white transition">catushar2024@gmail.com</a>
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Phone:</span> <a href="tel:+919416193523" className="hover:text-white transition">(+91) 9416193523</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
        © 2025 CA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
