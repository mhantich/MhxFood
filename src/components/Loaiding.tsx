
const Loaiding = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center">
      <div className="w-32 h-32 relative animate-spin">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full stroke-orange-600 stroke-2 fill-none"
        >
          <path d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" />
          <path d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </div>
      <div className="mt-8 text-2xl text-orange-600 animate-bounce">
        Loading...
      </div>
    </div>
  );
};

export default Loaiding;