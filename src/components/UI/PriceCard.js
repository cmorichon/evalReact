import React from 'react';

const PriceCard = ({ titrePrestation, tarif, description }) => {
  return (
    <div className=" rounded-lg">
      <div className="rounded-2xl bg-sky-50 border border-sky-700 p-6 shadow-sm ring-1 ring-sky-600 sm:order-last sm:px-8 lg:p-12 lg:h-96">
        <div className="text-center">
          <h2 className="text-lg font-medium">{titrePrestation}</h2>
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold sm:text-4xl">{tarif}</strong>
          </p>
        </div>
        <div className="text-center">
          <p className="mt-2 sm:mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
