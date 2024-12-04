interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}