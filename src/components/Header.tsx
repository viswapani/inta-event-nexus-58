
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, Users, Building, Image, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Agenda', href: '#agenda', icon: Calendar },
    { name: 'Speakers', href: '#speakers', icon: Users },
    { name: 'Sponsors & Media', href: '#sponsors', icon: Building },
    { name: 'AI Assistant', href: '#chatbot', icon: MessageCircle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Event Info */}
          <div className="flex items-center space-x-4">
            <div className="bg-inta-navy text-white px-3 py-1 rounded-md font-bold text-sm">
              INTA
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-inta-navy">INTA EVENT 2028</h1>
              <p className="text-xs text-inta-gray">Global Innovation Summit</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-inta-gray hover:text-inta-blue transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button className="bg-inta-blue hover:bg-inta-navy text-white">
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-inta-navy" />
            ) : (
              <Menu className="w-6 h-6 text-inta-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-inta-gray hover:text-inta-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <Button className="bg-inta-blue hover:bg-inta-navy text-white w-full mt-4">
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
