import React from 'react';
import Link from 'gatsby-link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import bgLQ from '../img/bg-index-sand-800.jpg';
import bgMQ from '../img/bg-index-sand-1600.jpg';
import bgHQ from '../img/bg-index-sand-2500.jpg';

const social = [
  {
    id: 1,
    url: 'http://linkedin.com/in/wojciechzajac'
  },
  {
    id: 2,
    url: 'http://twitter.com/wojtek'
  },
  {
    id: 3,
    url: 'http://github.com/theanxy'
  },
  {
    id: 5,
    url: 'http://instagram.com/expatowy'
  },
  {
    id: 6,
    type: 'email',
    url: 'mailto:wojtek@wojtekzajac.com'
  }
];

const Content = styled.section`
  margin: 30vh auto 0;
  max-width: 600px;
  position: relative;
  text-align: center;
`;

const Bg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgLQ});
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;

  @media (min-device-width: 400px) {
    background-image: url(${bgMQ});
  }

  @media (min-device-width: 1600px), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bgHQ});
  }
`;

const Heading = styled.h1`
  font-size: 80px;
  color: #fff;
  text-shadow: 3px 4px 0 #000;

  @media (min-width: 650px) {
    font-size: 150px;
  }
`;

const Social = styled.ul`
  list-style: none;
  margin: 0;
`;

const Icon = styled.li`
  display: inline-block;
  padding-right: 5px;
`;

class Home extends React.Component {
  render() {
    return (
      <section>
        <Bg />

        <Content>
          <Heading>Wojtek Zając</Heading>

          <Social>
            {social.map(link => (
              <Icon key={link.id}>
                <SocialIcon
                  url={link.url}
                  color="rgba(255, 255, 255, 1)"
                  network={link.type}
                  style={{ height: 30, width: 30 }}
                />
              </Icon>
            ))}
          </Social>
        </Content>
      </section>
    );
  }
}

export default Home;
