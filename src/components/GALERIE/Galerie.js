import React, { useState } from 'react';
import { fetchContentfulEntriesGalerie } from '../../contentFul/queryRequest';
import { useQuery } from 'react-query';
import Button from '../UI/Button';
import ImageCard from '../UI/ImageCard';
import Title from '../UI/Title';

const Galerie = () => {
  const [dataGalerie, setDataGalerie] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState();

  useQuery('contentfulEntriesGalerie', fetchContentfulEntriesGalerie, {
    onSuccess: (data) => {
      const allTags = new Set();
      data.map((image) => {
        const imageInfo = {
          name: image.fields.titre,
          url: image.fields.image.fields.file.url,
          tag: image.fields.tags.map((t) => t),
        };
        imageInfo.tag.forEach((tag) => {
          if (tag !== 'Tous') {
            allTags.add(tag);
          }
        });
        setTags(Array.from(allTags));
        return setDataGalerie((prevDataGalerie) => [
          ...prevDataGalerie,
          imageInfo,
        ]);
      });
    },
  });

  const filterImage = () => {
    if (activeTag) {
      return dataGalerie
        .filter((dataGalerieFilter) =>
          dataGalerieFilter.tag.includes(activeTag),
        )
        .map((elt) => (
          <ImageCard
            tag={elt.tag}
            key={elt.index}
            alt={elt.name}
            url={elt.url}
          />
        ));
    } else {
      return dataGalerie.map((elt) => (
        <ImageCard tag={elt.tag} key={elt.index} alt={elt.name} url={elt.url} />
      ));
    }
  };

  return (
    <section className="container m-auto ">
      <Title content="La galerie photo" />
      <Button onClick={(e) => setActiveTag()} content="Tous" />
      {tags
        ? tags.map((tag) => (
            <Button key={tag} onClick={() => setActiveTag(tag)} content={tag} />
          ))
        : null}
      <div className="py-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 object-cover">
        {dataGalerie ? filterImage() : null}
      </div>
    </section>
  );
};

export default Galerie;
