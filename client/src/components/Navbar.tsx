import { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Image, IndianRupee, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleNavigation = useCallback((path: string, tab: string) => {
    setActiveTab(tab);
    navigate(path);
    setIsOpen(false); // Close mobile menu on navigation
  }, [navigate]);

  const tabMapping = useMemo(() => ({
    '/': 'home',
    '/gallery': 'gallery',
    '/rate-tariff': 'rate-tariff',
    '/contact': 'contact',
  }), []);

  useEffect(() => {
    const activeTab = (Object.keys(tabMapping) as Array<keyof typeof tabMapping>)
      .sort((a, b) => b.length - a.length)
      .find(path => location.pathname.startsWith(path)) as keyof typeof tabMapping | undefined;
    if (activeTab && activeTab in tabMapping) {
      setActiveTab(tabMapping[activeTab]);
    }
  }, [location.pathname, tabMapping]);

  const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/gallery', name: 'Gallery', icon: Image },
    { path: '/rate-tariff', name: 'Rate-Tariff', icon: IndianRupee },
    { path: '/contact', name: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavigation('/', 'home')} className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-600">Mohor Homestay</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, name, icon: Icon }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path, name.toLowerCase())}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${activeTab === name.toLowerCase()
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, name, icon: Icon }) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path, name.toLowerCase())}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${activeTab === name.toLowerCase()
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;