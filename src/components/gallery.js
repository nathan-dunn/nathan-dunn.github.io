import React, { useState } from 'react';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledGallery = styled.div`
  .gallery-container {
    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .images {
    overflow: hidden; /* To ensure images exceeding the container's dimensions are hidden */
    display: flex;
    justify-content: space-around;
    gap: 16px;
    max-height: 400px;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .img {
    object-fit: cover;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);

    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }

  .img:hover,
  .img:focus {
    background-color: transparent;
    outline: 0;
    filter: none;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
`;

const Gallery = ({ covers }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const imageByIndex = index => covers[index % covers.length];

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <StyledGallery>
      <div ref={emblaRef} className="gallery-container">
        <div className="images">
          {covers.map((image, imageIndex) => (
            <div
              className="image-wrapper"
              onClick={() => {
                setPhotoIndex(imageIndex);
                setIsOpen(true);
              }}
            >
              <GatsbyImage
                key={imageIndex}
                className="img embla__slide"
                image={getImage(image)}
                alt={`Slide ${imageIndex + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
