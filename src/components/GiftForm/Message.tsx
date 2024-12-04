interface MessageProps {
  type: 'success' | 'error';
  children: React.ReactNode;
}

export function Message({ type, children }: MessageProps) {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  
  return (
    <div className={`mt-4 p-3 rounded-md ${bgColor} ${textColor}`}>
      {children}
    </div>
  );
}