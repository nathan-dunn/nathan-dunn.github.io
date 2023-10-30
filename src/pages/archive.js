import React, { useRef, useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;

        &:hover {
          color: var(--green);
        }
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech-list {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
          margin-bottom: 0.5rem;
          margin-right: 0.375rem;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;
        }

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
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A short list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
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

          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const {
                    id,
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                    showInGallery,
                    covers,
                  } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <Link className="title" to={i === 0 ? '/gallery' : `/gallery/#${id}`}>
                        <td className="title">{title}</td>
                      </Link>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech-list hide-on-mobile">
                        {tech?.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i} className="tech">
                              {item}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <div>
                          {showInGallery && (
                            <span
                              className="icon"
                              onClick={() => {
                                setSlides(covers);
                                setOpen(true);
                              }}>
                              <Icon name="Gallery" />
                            </span>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link" className="icon">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a href={external} aria-label="External Link" className="icon">
                              <Icon name="External" />
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label="Apple App Store Link" className="icon">
                              <Icon name="AppStore" />
                            </a>
                          )}
                          {android && (
                            <a href={android} aria-label="Google Play Store Link" className="icon">
                              <Icon name="PlayStore" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/(featured|projects)/" } }
      sort: { fields: [frontmatter___date, id], order: [DESC, ASC] }
    ) {
      edges {
        node {
          frontmatter {
            id
            date
            title
            tech
            github
            external
            company
            showInGallery
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
          }
          html
        }
      }
    }
  }
`;
