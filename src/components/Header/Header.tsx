import { Link } from './Link';
import { MobileMenu } from './MobileMenu';

const navigationLinks = [
  { href: '#faq', label: 'Preguntas Frecuentes' },
  { href: '#privacy', label: 'Política de Pivacidad' }
];

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center transform hover:scale-105 transition-transform">
            <img 
              src="/src/assets/logo.png" 
              alt="Arval BNP Paribas Group" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden lg:flex space-x-8 animate-fade-in">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileMenu links={navigationLinks} />
        </div>
      </div>
    </header>
  );
}