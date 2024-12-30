export const HeroSection = () => {
    return (
      <section
        style={{ backgroundImage: "url(hero-img.jpg)" }}
        className="relative min-h-[700px] bg-gray-50"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
  
        <div className="container relative z-20 mx-auto grid min-h-[700px] grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 font-serif text-4xl lg:text-6xl text-white font-extrabold leading-tight">
              Best food for
              <br />
              your taste
            </h1>
            <p className="mb-8 text-white font-bold">
              Discover delectable cuisine and unforgettable moments
              <br />
              in our welcoming, culinary haven.
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-primary px-6 py-3 text-white hover:bg-primary/90">
                Book A Table
              </button>
              <button className="rounded-full border border-gray-300 px-6 py-3 text-white hover:bg-gray-500">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };