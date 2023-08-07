import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchContentfulEntriesAccueil } from '../../contentFul/queryRequest';

const Accueil = () => {
  const [dataAccueil, setDataAcceuil] = useState();

  const { data } = useQuery(
    'contentfulEntriesAccueil',
    fetchContentfulEntriesAccueil,
    {
      onSuccess: (data) => {
        setDataAcceuil(...data);
      },
    },
  );

  return (
    <section className="bg-hero bg-cover h-full">
      <div className="container m-auto h-full flex items-center text-center w-2/3">
        <h1 className="border-y-2 border-white text-white font-bold w-full text-4xl lg:text-8xl py-10">
          {dataAccueil ? dataAccueil.fields.titrePageAccueil : null}
        </h1>
      </div>
    </section>
  );
};

export default Accueil;
