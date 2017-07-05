//Create our image list component
//Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600x400' },
  {title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
  {title: 'Coffee', link: 'https://dummyimage.com/600x400' },
];

//Create component

const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail />
  });
  return (
    <ul>
    {RenderedImages}
    </ul>
  );
};

//Export our component
export default ImageList;
