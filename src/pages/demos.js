import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import Gallery from '@components/gallery';
import { Icon } from '@components/icons';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  .section {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 80px;
      border: 1px solid var(--light-navy);

      @media (max-width: 768px) {
        gap: 40px;
      }
    }

    .content .row-wrapper {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    .td {
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

    .row-wrapper {
      // padding-top: 100px; // <--- here
    }

    .row-wrapper:first-child {
      // padding-top: 0; // <--- here
    }

    .tr {
      padding-bottom: 10px;
      cursor: default;

      .td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      .td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    .td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.img {
        padding-top: 25px;
        padding-bottom: 25px;
        padding-right: 50px;
        padding-left: 50px;
        color: var(--lightest-slate);
        font-size: var(--fz-heading);
        font-weight: 600;
        line-height: 1.25;
        width: 100%;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .gallery {
    padding-left: 20px;
    padding-right: 20px;
  }

  .header {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
  }

  .title {
    padding-top: 5px;
    padding-right: 50px;
    color: var(--lightest-slate);
    font-size: var(--fz-heading);
    font-weight: 600;
    line-height: 1.25;
  }

  .title:hover {
    // color: var(--green); // <--- not clickable so don't highlight
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: -5px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

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
`;

const DemosPage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

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
      <Helmet title="Demos" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Demos</h1>
          <p className="subtitle">To get the gist</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <div className="section">
            <div className="content">
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { id, title, external, tech, github, covers } = node.frontmatter;

                  return (
                    <div className="row-wrapper" id={id} key={i + title}>
                      <div className="tr" ref={el => (revealProjects.current[i] = el)}>
                        <div className="td header">
                          <div className="title">{title}</div>
                          <div className="project-links hide-on-mobile">
                            {github && (
                              <a href={github} aria-label="GitHub Link">
                                <Icon name="GitHub" />
                              </a>
                            )}
                            {external && (
                              <a href={external} aria-label="External Link" className="external">
                                <Icon name="External" />
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="td gallery">
                          <Gallery node={node} covers={covers} />
                        </div>

                        <div className="td tech hide-on-mobile">
                          {tech?.length > 0 &&
                            tech.map((item, i) => (
                              <span key={i + item}>
                                {item}
                                {''}
                                {i !== tech.length - 1 && (
                                  <span className="separator">&middot;</span>
                                )}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};
DemosPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default DemosPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/(featured|projects)/" }
        frontmatter: { showInDemos: { ne: false } }
      }
      sort: { fields: [frontmatter___id], order: ASC }
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
            covers {
              childImageSharp {
                small: gatsbyImageData(
                  height: 350
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
                large: gatsbyImageData(
                  height: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
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
