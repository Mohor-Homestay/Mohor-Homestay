import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Mohor Homestay</h3>
            <p className="text-gray-400">Experience the warmth of Bengali hospitality in our cozy homestay.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Taltore, Prantik, near Mobile Tower</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+918420909199</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>amarnathshee@yahoo.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
              <li><a href="/rate-tariff" className="hover:text-emerald-400 transition-colors">Rate Tariff</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Book Now</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohor Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;