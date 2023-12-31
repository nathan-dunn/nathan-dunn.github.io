import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconDark,
  IconDemo,
  IconExternal,
  IconFolder,
  IconFork,
  IconGallery,
  IconGitHub,
  IconInstagram,
  IconLight,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconResume,
  IconStar,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Resume':
      return <IconResume />;
    case 'Demo':
      return <IconDemo />;
    case 'Light':
      return <IconLight />;
    case 'Dark':
      return <IconDark />;
    case 'Gallery':
      return <IconGallery />;

    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
