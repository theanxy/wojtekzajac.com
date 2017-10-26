import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Menu from './_menu';
import './styles/basic.css';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  margin-top: 0;
`;

const Masthead = styled.header`
  float: left;
  margin-bottom: 2rem;
`;

const Header = () => (
  <Masthead>
    <H1>
      <Link to="/">Home</Link>
    </H1>
  </Masthead>
);

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet title="Wojtek Zając" meta={[{ name: 'description', content: 'Wojtek Zając' }]} />
    <Header />
    <Menu />
    <div className="content">{children()}</div>
    <footer>&copy; Wojtek</footer>
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
