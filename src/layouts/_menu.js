import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Menu = styled.ul`
  float: right;
  position: relative;
  z-index: 5;
  font-size: 14px;
  text-transform: uppercase;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 3em;
`;

const pages = [
  // {
  //   id: 4,
  //   text: 'Sample',
  //   url: '/sample'
  // },
  {
    id: 1,
    text: 'About',
    url: '/about'
  },
  {
    id: 2,
    text: 'Travels',
    url: '/travels'
  },
  {
    id: 3,
    text: 'Photography',
    url: '/photography'
  },
  {
    id: 4,
    text: 'Speaking',
    url: '/speaking'
  }
];

export default () => (
  <Menu>
    {pages.map(page => (
      <Li key={page.id}>
        <Link to={page.url}>{page.text}</Link>
      </Li>
    ))}
  </Menu>
);
