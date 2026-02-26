export default function Container({ children, className = "" }) {
  return (
    <div
      className={`container mx-auto px-4 lg:px-8 py-3 xl:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
