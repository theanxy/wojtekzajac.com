import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import PAGE_LIST from './pages';

const Menu = styled.ul`
  position: relative;
  margin: 0;
  z-index: 5;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 650px) {
    padding-top: 2.3em;
    text-align: left;
  }
`;

const Li = styled.li`
  display: inline-block;
  margin-right: 2em;

  @media (min-width: 600px) {
    margin-right: 3em;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    border: none;
  }

  &[data-shaded='true'] {
    opacity: 0.4;
    display: none;
  }
`;

const pages = process.env.SHOW_FULL_MENU ? PAGE_LIST : PAGE_LIST.filter((page) => page.isPublished);

export default () => (
  <Menu>
    {pages.map((page, id) => (
      <Li key={id} data-shaded={!page.isPublished}>
        {page.isExternal ? (
          <a href={page.url} target="_blank" rel="noopener noreferrer">
            {page.text}{' '}
            <span role="img" aria-label="external link">
              &rarr;
            </span>
          </a>
        ) : (
          <Link to={page.url} activeStyle={{ fontWeight: 600 }}>
            {page.text}
          </Link>
        )}
      </Li>
    ))}
  </Menu>
);
