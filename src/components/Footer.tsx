
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { LinkedinIcon, Twitter, Mail, MapPin, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      { name: 'Agenda', href: '#agenda' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Sponsors', href: '#sponsors' },
      { name: 'Registration', href: '#registration' }
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Technical Support', href: '#support' },
      { name: 'Accessibility', href: '#accessibility' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Code of Conduct', href: '#conduct' },
      { name: 'Refund Policy', href: '#refunds' }
    ]
  };

  return (
    <footer className="bg-inta-navy text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand and Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-inta-navy px-3 py-1 rounded-md font-bold text-sm">
                INTA
              </div>
              <span className="font-semibold">EVENT 2028</span>
            </div>
            <p className="text-blue-200 text-sm">
              Global Innovation & Technology Summit for intellectual property professionals.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-inta-accent" />
                <span>March 15-17, 2028</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-inta-accent" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-inta-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-inta-accent" />
                <span>info@intaevent2028.com</span>
              </div>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="font-semibold mb-4">Event</h3>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-inta-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-inta-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-blue-200 text-sm mb-4">
              Get the latest event updates and announcements.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="w-full bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-blue-200 text-sm">
              © {currentYear} International Trademark Association. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-blue-200 hover:text-inta-accent transition-colors duration-200 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-blue-200 text-sm">Follow us:</span>
            <a 
              href="#" 
              className="text-blue-200 hover:text-inta-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-inta-accent transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-inta-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
