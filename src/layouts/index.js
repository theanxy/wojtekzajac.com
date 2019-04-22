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
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    float: left;
  }

  a {
    border: none;
  }
`;

const Masthead = styled.header`
  margin-bottom: 2em;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Phonetic = styled.span`
  font-family: Arial;
  font-weight: 400;
  display: none;
`;

const Content = styled.div`
  clear: both;
`;

const SiteFooter = styled.footer`
  margin-top: 5em;
  border-top: 1px solid #ccc;
  max-width: 500px;
  padding-top: 1em;
  font-size: 13px;

  em {
    font-style: normal;
    padding-left: 1em;
    color: #888;
  }
`;

const Header = () => (
  <H1>
    <Link to="/">
      Wojtek Zajac <Phonetic>[ˈvɔi̯tɛk]</Phonetic>
    </Link>
  </H1>
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

    {location.pathname !== '/' && (
      <SiteFooter>
        &copy; 2018 Wojtek <em>hello@wojtekzajac.com</em>
      </SiteFooter>
    )}
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
