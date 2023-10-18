import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const StyledGallery = styled.div`
  .gallery-container {
    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .images {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    max-height: 400px;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .image-wrapper {
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);

    &:hover,
    &:focus {
      background-color: transparent;
      outline: 0;
      filter: none;
    }
  }

  .img {
    object-fit: cover;
    border-radius: var(--border-radius);

    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      // filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
`;

const _Gallery = ({ covers }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledGallery>
      <div className="gallery-container">
        <div className="images">
          {covers.map((cover, index) => {
            const small = getImage(cover.childImageSharp.small);
            return (
              <div key={index} className="image-wrapper" onClick={() => setOpen(true)}>
                <GatsbyImage key={index} className="img" image={small} alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={covers}
          render={{
            slide: ({ slide }, index) => {
              const large = getImage(slide.childImageSharp.large);
              return (
                <div key={index} className="image-wrapper" onClick={() => setOpen(true)}>
                  <GatsbyImage
                    key={index}
                    className="img"
                    image={large}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              );
            },
          }}
          carousel={{ preload: 1, padding: 0 }}
        />
      </div>
    </StyledGallery>
  );
};

export default _Gallery;
