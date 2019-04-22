import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import PAGE_LIST from './pages';

const Menu = styled.ul`
  position: relative;
  margin: 0 -3em 0 0;
  z-index: 5;
  font-size: 14px;
  text-transform: uppercase;

  @media (min-width: 600px) {
    padding-top: 2.3em;
  }
`;

const Li = styled.li`
  display: inline-block;
  margin-right: 3em;

  a {
    border: none;
  }

  &[data-shaded='true'] {
    opacity: 0.4;
    display: none;
  }
`;

const pages = process.env.SHOW_FULL_MENU
  ? PAGE_LIST
  : PAGE_LIST.filter(page => page.isPublished);

export default () => (
  <Menu>
    {pages.map((page, id) => (
      <Li key={id} data-shaded={!page.isPublished}>
        <Link to={page.url} activeStyle={{ fontWeight: 600 }}>
          {page.text}
        </Link>
      </Li>
    ))}
  </Menu>
);
