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
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    overflow: hidden;
    max-height: 400px;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .images-spaced {
    justify-content: space-around;
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

const Gallery = ({ covers }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledGallery>
      <div className="gallery-container">
        <div className={`images ${covers.length > 2 ? 'images-spaced' : ''}`}>
          {covers.map((cover, index) => (
            <div key={index} className="image-wrapper" onClick={() => setOpen(true)}>
              <GatsbyImage
                key={index}
                className="img"
                image={getImage(cover.childImageSharp.small)}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={covers}
          render={{
            slide: ({ slide }, index) => (
              <div key={index} className="image-wrapper" onClick={() => setOpen(true)}>
                <GatsbyImage
                  key={index}
                  className="img"
                  image={getImage(slide.childImageSharp.large)}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ),
          }}
          carousel={{ preload: 1, padding: 0 }}
        />
      </div>
    </StyledGallery>
  );
};

export default Gallery;
