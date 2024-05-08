'use client';

import NextImage from 'next/image';

const Image = ({ src, alt, ...rest }) => {
  return (
    <NextImage  src={src} alt={alt} {...rest} loader={({ src }) => `${src}`} />
  );
};

export default Image;
