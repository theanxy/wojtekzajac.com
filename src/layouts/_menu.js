import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Menu = styled.ul`float: right;`;

const Li = styled.li`
  display: inline-block;
  margin-left: 1em;
`;

const pages = [
  {
    id: 0,
    text: 'Home',
    url: ''
  },
  {
    id: 4,
    text: 'Sample',
    url: 'sample'
  },
  {
    id: 1,
    text: 'Experience',
    url: 'experience'
  },
  {
    id: 2,
    text: 'Speaking',
    url: 'speaking'
  },
  {
    id: 3,
    text: 'Travels',
    url: 'travels'
  }
];

export default () =>
  <Menu>
    {pages.map(page =>
      <Li key={page.id}>
        <Link to={page.url}>
          {page.text}
        </Link>
      </Li>
    )}
  </Menu>;