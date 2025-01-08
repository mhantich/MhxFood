import { Mail, Menu, Phone, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "@/stores/userStore";
import { CartDrawer } from "./CartDrawer";
import { getImageUrl } from "@/utlits/imageUtils";
import { useAuthStore } from "@/stores/authStore";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useUserStore();
  const { setAuthState } = useAuthStore();

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setAuthState(false);
    
  };

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
            <a className="hover:text-primary">Twitter</a>
            <a className="hover:text-primary">Facebook</a>
            <a className="hover:text-primary">Instagram</a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-serif">
            <span className="text-primary">Mhx</span> Food
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/About" className="hover:text-primary">
              About
            </Link>
            <Link to="Menu" className="hover:text-primary">
              Menu
            </Link>
            <Link to="/Pages" className="hover:text-primary">
              Pages
            </Link>
            <div className="flex items-center gap-4">
     

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                            src={getImageUrl(user?.profileImage)}
                      
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{user?.firstName} {user?.lastName}</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User size={16} />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-primary hover:text-primary/90"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90"
                >
                  Sign Up
                </Link>
              </div>
            )}
              <CartDrawer />

            </div>
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
          <div className="flex md:hidden items-center gap-4">
              <CartDrawer />
            </div>
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
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/About" className="hover:text-primary">
              About
            </Link>
            <Link to="Menu" className="hover:text-primary">
              Menu
            </Link>
            <Link to="/Pages" className="hover:text-primary">
              Pages
            </Link>
            
            {user ? (
              <>
                <Link to="/profile" className="hover:text-primary">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90 text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50"
          />
        )}

        {/* Backdrop for profile dropdown */}
        {isProfileOpen && (
          <div
            onClick={() => setIsProfileOpen(false)}
            className="fixed inset-0 z-30"
          />
        )}
      </div>
    </nav>
  );
};