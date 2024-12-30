import React from 'react';

const ServiceCard = ({ image, title }: { image: string; title: string }) => (
  <div className="relative group cursor-pointer">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Caterings',
      image: '1.png'
    },
    {
      title: 'Birthdays',
      image: '2.png'
    },
    {
      title: 'Weddings',
      image: '1.png'
    },
    {
      title: 'Events',
      image: '2.png'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif mb-12">
        We also offer unique
        <br />
        services for your events
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;