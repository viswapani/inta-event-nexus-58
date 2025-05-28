
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Calendar, Users, Building, MessageCircle, Heart, Search, User } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { Badge } from '@/components/ui/badge';
import SearchOverlay from './SearchOverlay';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { data: bookmarks = [] } = useBookmarks('event-2028');

  const navigationItems = [
    { name: 'Agenda', href: '#agenda', icon: Calendar },
    { 
      name: 'Favorites', 
      href: '#favorites', 
      icon: Heart,
      badge: bookmarks.length > 0 ? bookmarks.length : null
    },
    { name: 'Speakers', href: '#speakers', icon: Users },
    { name: 'Sponsors & Media', href: '#sponsors', icon: Building },
    { name: 'AI Assistant', href: '#chatbot', icon: MessageCircle },
  ];

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Empty left space where logo was */}
            <div className="flex items-center">
              {/* Logo removed */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-inta-gray hover:text-inta-blue transition-colors duration-200 relative"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <Badge className="ml-1 bg-inta-blue text-white text-xs min-w-[18px] h-4 flex items-center justify-center p-0">
                      {item.badge}
                    </Badge>
                  )}
                </a>
              ))}
              
              {/* Desktop Search */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline">Search</span>
              </Button>
              
              {/* Profile */}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Profile</span>
              </Button>
            </nav>

            {/* Prominent Register Now Button with increased spacing */}
            <div className="flex items-center gap-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 text-lg shadow-lg"
                onClick={scrollToRegistration}
              >
                Register Now
              </Button>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="mr-2"
                >
                  <Search className="w-5 h-5 text-inta-navy" />
                </Button>
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-inta-navy" />
                  ) : (
                    <Menu className="w-6 h-6 text-inta-navy" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between text-inta-gray hover:text-inta-blue transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.badge && (
                      <Badge className="bg-inta-blue text-white text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                    onClick={scrollToRegistration}
                  >
                    Register Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
