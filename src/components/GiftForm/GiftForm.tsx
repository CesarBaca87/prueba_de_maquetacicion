import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { validateGiftCode } from '../../utils/validateGiftCode';
import { Message } from './Message';

export function GiftForm() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateGiftCode(code)) {
      setMessage({
        type: 'success',
        text: '¡Código válido! Tu regalo estará disponible pronto.'
      });
    } else {
      setMessage({
        type: 'error',
        text: 'Código no válido. El código debe contener entre 8 y 10 caracteres, un número y una letra mayúscula.'
      });
    }
  };

  return (
    <div className="bg-emerald-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              DESCUBRE TU REGALO
            </h2>
            <p className="mt-3 text-lg text-gray-100">
              Introduce tu código y elige tu regalo
            </p>
          </div>
          <div className="mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Código de regalo"
                className="w-full sm:w-auto transform transition-transform hover:scale-102 focus:scale-102"
              />
              <Button type="submit" className="mt-3 sm:mt-0 sm:ml-3">
                Descubrir
              </Button>
            </form>
            {message && (
              <Message type={message.type}>
                {message.text}
              </Message>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}