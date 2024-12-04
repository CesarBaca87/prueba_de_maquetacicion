interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 hover:shadow-md ${className}`}
    />
  );
}