import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto">
          {/* Top Bar */}
          <div className="hidden md:flex items-center justify-between border-b py-2 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Phone size={14} />
                (000) 000 - 000
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} />
                mohame.mhantich6@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a  className="hover:text-primary">Twitter</a>
              <a  className="hover:text-primary">Facebook</a>
              <a  className="hover:text-primary">Instagram</a>
            </div>
          </div>
  
          {/* Main Nav */}
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-serif">
              <span className="text-primary">Mhx</span> Food
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to='/'  className="hover:text-primary">Home</Link>
              <Link to='/About'  className="hover:text-primary">About</Link>
              <Link to='Menu'  className="hover:text-primary">Menu</Link>
              <Link to='/Pages'  className="hover:text-primary">Pages</Link>
              <Link to='/Booking'  className="hover:text-primary">Booking</Link>
              <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90">
                Book A Table
              </button>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 z-40 h-full w-3/4 bg-white shadow-md transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-2xl font-serif">
                <span className="text-primary">Mhx</span> Food
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-4">
              <Link to='/'  className="hover:text-primary">Home</Link>
              <Link to='/About'  className="hover:text-primary">About</Link>
              <Link to='Menu'  className="hover:text-primary">Menu</Link>
              <Link to='/Pages'  className="hover:text-primary">Pages</Link>
              <Link to='/Booking'  className="hover:text-primary">Booking</Link>
              <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90">
                Book A Table
              </button>
            </nav>
          </div>
  
          {/* Backdrop for mobile menu */}
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/50"
            />
          )}
        </div>
      </nav>
    );
  };