import React, { useState } from 'react';
import { fetchContentfulEntriesTarifs } from '../../contentFul/queryRequest';
import { useQuery } from 'react-query';
import PriceCard from '../UI/PriceCard';
import Title from '../UI/Title';

const Tarifs = () => {
  const [dataTarifs, setDataTarif] = useState();

  useQuery('contentfulEntriesTarifs', fetchContentfulEntriesTarifs, {
    onSuccess: (data) => {
      setDataTarif(data);
    },
  });

  return (
    <section className="container m-auto h-full ">
      <Title content="Les tarifs et prestations" />
      <div class="my-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 px-4">
        {dataTarifs
          ? dataTarifs.map((elt) => (
              <PriceCard
                titrePrestation={elt.fields.titreprestation}
                tarif={elt.fields.tarif}
                description={elt.fields.description}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default Tarifs;
