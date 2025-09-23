import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GetAQuotePopup from '@/components/GetAQuotePopup';
import CallBackRequestPopup from '@/components/CallBackRequestPopup';
import logo from '@/assets/logo.png'
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-md border-border/50 sticky top-0 z-50">
        <div className=" container-wide p-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <img className='object-contain rounded-lg' src={logo} alt="Logo" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-industrial-dark">
                  Easy Electrical & Safety
                </h1>
                <p className="text-xs text-industrial-medium">
                  EES - Empowering Safe Infrastructure
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium text-black transition-colors hover:text-primary ${isActive(item.href)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-industrial-medium'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <GetAQuotePopup trigger={
                <Button variant="default" size="sm" className="btn-hover-lift">
                  Get Quote
                </Button>
              } />
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${isActive(item.href)
                        ? 'text-primary bg-muted'
                        : 'text-industrial-medium hover:text-primary hover:bg-muted/50'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-border pt-2 pb-[-0.5rem]">
                  <GetAQuotePopup trigger={
                    <Button variant="default" size="sm" className="btn-hover-lift rounded-md w-full">
                      Get Quote
                    </Button>
                  } />
                </div>

              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-industrial-dark text-white">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                  <img className='object-contain rounded-lg' src={logo} alt="logo" />
                </div>
                <h3 className="text-lg font-semibold">Easy Electrical & Safety</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leading manufacturer of electrical boxes and safety equipment in India.
                Committed to safety, reliability, and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">IS</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">FR</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">CE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Electric Boxes</li>
                <li>Distribution Boards</li>
                <li>Panel Boards</li>
                <li>Cable Trays</li>
                <li>Switchgear Accessories</li>
                <li>Custom Solutions & more</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-gray-300"> 
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-primary" />
                  <span>Faridabad, Haryana 121005</span>
                </div>
                <div onClick={() => window.open('tel:+917011806885')} className="flex hover:text-white cursor-pointer items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 70118 06885</span>
                </div>
                <div onClick={() => window.open('mailto:easyelectrical1154@gmail.com')} className="flex hover:text-white cursor-pointer items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span> easyelecrical1154@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Easy Electrical & Safety. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
