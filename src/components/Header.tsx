import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import SocialBar from './socials';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/programme', label: 'Programme' },
    { path: '/liste', label: 'Liste' },
    { path: '/agenda', label: 'Agenda' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center stretch h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div style={{width:'280px'}}>
              <img src='/logo_simple_blanc_sans_triangle.svg' style={{height:"48px"}}/>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav style={{width:'100%', justifyContent:'center'}} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-pink'
                    : 'bg-gradient-fade hover:text-white hover:bg-gray-50'
                }`}
                style={
                  isActive(link.path)
                  ? {background:'linear-gradient(to left, var(--color-blue-600), #D22E9A)'}
                  : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <SocialBar id='01'/>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {/*{isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-200 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-[#0B3D91] bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* <div className="pt-4 space-y-2">
              <Link to="/join" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="outline" className="w-full border-[#0B3D91] text-[#0B3D91]">
                  Join Campaign
                </Button>
              </Link>
              <Link to="/support" onClick={() => setIsMenuOpen(false)} className="block">
                <Button className="w-full bg-[#FF6F00] hover:bg-[#E66300] text-white">
                  Support
                </Button>
              </Link>
            </div> /}
          </nav>
        )}*/}
      </div>
    </header>
  );
}
