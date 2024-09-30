import React from 'react';

const PromoCards = () => {
  const promos = [
    {
      image: 'https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'SALE 30%',
      subtitle: 'Don\'t Miss This Chance',
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/1700769/pexels-photo-1700769.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'BABY DRESS',
      subtitle: 'OFF 70%',
      link: '#',
    },
    {
      image: 'https://images.pexels.com/photos/1700769/pexels-photo-1700769.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Woman Dress 2019',
      subtitle: 'SALE 25%',
      link: '#',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {promos.map((promo, index) => (
        <div key={index} className="relative w-full sm:w-1/3 h-80 overflow-hidden rounded-lg shadow-lg">
          <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-xl font-bold">{promo.title}</h2>
            <p className="text-lg">{promo.subtitle}</p>
            <a href={promo.link} className="mt-4 px-4 py-2 bg-white text-black rounded-full">Shop Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
