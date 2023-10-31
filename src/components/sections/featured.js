import React, { useEffect, useState, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      margin: 25px 0 10px 75px;
      // border: 1px solid red;
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 75px 10px 0;
    padding: 0;
    list-style: none;
    // border: 1px solid pink;

    li {
      margin-bottom: 0.5rem;
      margin-right: 0.375rem;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    .icon {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      cursor: pointer;

      &:hover,
      &:focus {
        color: var(--green);
      }

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    &:hover,
    &:focus {
      cursor: pointer;
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    .img {
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
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/(featured)/" } }
        sort: { fields: [frontmatter___id], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              id
              title
              jobTitle
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              covers {
                childImageSharp {
                  huge: gatsbyImageData(
                    height: 1200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                  )
                }
              }
              tech
              github
              external
              showInGallery
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="work">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={0}
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
      />

      <h2 className="numbered-heading" ref={revealTitle}>
        Current Work
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, projectIndex) => {
            const { frontmatter, html } = node;
            const { id, external, title, jobTitle, tech, github, cover, covers, showInGallery } =
              frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject
                key={projectIndex}
                ref={el => (revealProjects.current[projectIndex] = el)}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{jobTitle}</p>

                    <h3 className="project-title">{title}</h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>
                            <div className="tech">{tech}</div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {showInGallery && (
                        <span
                          aria-label="Gallery Link"
                          className="icon"
                          onClick={() => {
                            setSlides(covers);
                            setOpen(true);
                            window.gtag('event', 'button_click', {
                              event_category: 'featured',
                              event_label: `link - ${title.toLowerCase()} - gallery`,
                            });
                          }}>
                          <Icon name="Gallery" />
                        </span>
                      )}
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          className="icon"
                          onClick={() => {
                            window.gtag('event', 'button_click', {
                              event_category: 'featured',
                              event_label: `link - ${title.toLowerCase()} - github`,
                            });
                          }}>
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="icon"
                          onClick={() => {
                            window.gtag('event', 'button_click', {
                              event_category: 'featured',
                              event_label: `link - ${title.toLowerCase()} - external`,
                            });
                          }}>
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="project-image"
                  onClick={() => {
                    setSlides(covers);
                    setOpen(true);
                    window.gtag('event', 'button_click', {
                      event_category: 'featured',
                      event_label: `image - ${title}`,
                    });
                  }}>
                  <GatsbyImage image={image} alt={title} className="img" />
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
