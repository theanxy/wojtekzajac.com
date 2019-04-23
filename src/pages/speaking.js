import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Header from '../img/speaking/header.jpg';

const SpeakingPage = styled.div`
  @media (min-width: 650px) {
    margin: 0 2.5em;
  }

  @media (min-width: 850px) {
    margin: 0 5em;
  }

  p {
    font-size: 20px;

    strong {
      font-weight: 600;
    }
  }
`;

const Pic = styled.div`
  @media (min-width: 650px) {
    margin: 0 -2.5em 3em;
  }

  @media (min-width: 850px) {
    margin: 0 -5em 3em;
  }
`;

class Speaking extends React.Component {
  render() {
    return (
      <SpeakingPage>
        <Pic>
          <img src={Header} alt="" />
        </Pic>

        <p>
          Since 2006, I've been regularly giving presentations or workshops on
          various topics ranging from <strong>web accessibility</strong> and{' '}
          <strong>modern front-end development</strong>, through{' '}
          <strong>working remotely</strong>, to{' '}
          <strong>managing distributed teams</strong>.
        </p>
        <p>
          If you'd like me to speak at your event, just{' '}
          <a href="mailto:speaking@wojtekzajac.com">get in touch</a>!
        </p>
      </SpeakingPage>
    );
  }
}

export default Speaking;
