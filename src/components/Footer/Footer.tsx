export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {[
            { href: '#faq', label: 'Preguntas frecuentes' },
            { href: '#legal', label: 'Avisos Legales' },
            { href: '#privacy', label: 'Política de privacidad y cookies' },
            { href: '#terms', label: 'Condiciones Generales' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-center transform hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}