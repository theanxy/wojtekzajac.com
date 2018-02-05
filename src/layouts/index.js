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
  font-size: 50px;
  float: left;
  margin-bottom: 2rem;
`;

const Masthead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2em;
`;

const Phonetic = styled.span`
  font-family: Arial;
  font-weight: 400;
  display: none;
`;

const Content = styled.div`
  clear: both;
`;

const Header = () => (
  <Masthead>
    <H1>
      <Link to="/">
        Wojtek Zajac <Phonetic>[ˈvɔi̯tɛk]</Phonetic>
      </Link>
    </H1>
  </Masthead>
);

const TemplateWrapper = ({ location, children }) => (
  <Container className="container">
    <Helmet
      title="Wojtek Zając"
      meta={[{ name: 'description', content: 'Wojtek Zając' }]}
    />

    <Masthead>
      {location.pathname !== '/' ? <Header /> : <div />}
      <Menu />
    </Masthead>

    <Content>{children()}</Content>

    {location.pathname !== '/' && <footer>&copy; Wojtek</footer>}
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
