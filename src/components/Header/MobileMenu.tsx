import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>;
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
      >
        {isOpen ? (
          <X className="h-6 w-6 animate-scale-in" />
        ) : (
          <Menu className="h-6 w-6 animate-scale-in" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg animate-slide-in">
          <nav className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}