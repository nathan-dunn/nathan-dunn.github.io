import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

// TODO: - get zoom to work

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

    &:hover,
    &:focus {
      background-color: transparent;
      outline: 0;
      filter: none;
    }
  }

  .images-spaced {
    justify-content: space-around;
  }

  .images-not-spaced {
    justify-content: flex-start;
    gap: 80px;
  }

  .image-wrapper {
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    cursor: pointer;

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
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
`;

const Gallery = ({ covers }) => {
  const zoomRef = React.useRef(null);
  const [open, setOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  return (
    <StyledGallery>
      <div className="gallery-container">
        <div className={`images ${covers.length <= 3 ? 'images-not-spaced' : 'images-spaced'}`}>
          {covers.map((cover, index) => (
            <div
              key={index}
              className="image-wrapper"
              onClick={() => {
                setLightBoxIndex(index);
                setOpen(true);
              }}
            >
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
          index={lightBoxIndex}
          render={{
            slide: ({ slide }, index) => (
              <div key={index} className="image-wrapper" onClick={() => setOpen(true)}>
                <GatsbyImage
                  key={index}
                  className="img"
                  image={getImage(slide.childImageSharp.huge)}
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: '90vh' }}
                  objectFit="contain"
                />
              </div>
            ),
          }}
          plugins={[Zoom]}
          animation={{ zoom: 500 }}
          zoom={{
            ref: zoomRef,
            maxZoomPixelRatio: 10,
            zoomInMultiplier: 300,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            disabled: false,
          }}
        />
      </div>
    </StyledGallery>
  );
};

export default Gallery;
