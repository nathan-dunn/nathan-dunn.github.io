import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }

    &.mode {
      cursor: pointer;
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
`;

const Email = ({ isHome, mode, setMode }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a
        className="mode"
        href={null}
        onClick={() => {
          const _initialMode = mode;
          setMode(p => (p === 'dark' ? 'light' : 'dark'));
          window.gtag('event', 'button_click', {
            event_category: 'misc',
            event_label: `mode -> ${_initialMode.toLowerCase()}`,
          });
        }}>
        <Icon name={mode === 'light' ? 'Dark' : 'Light'} />
      </a>
      <a
        href={`mailto:${email}`}
        onClick={() => {
          window.gtag('event', 'button_click', {
            event_category: 'contact',
            event_label: 'email - sidebar',
          });
        }}>
        {email}
      </a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
  mode: PropTypes.string,
  setMode: PropTypes.func,
};

export default Email;
