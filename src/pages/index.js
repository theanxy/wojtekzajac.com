import React from 'react';
import Link from 'gatsby-link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import Helmet from 'react-helmet';
// import bgLQ from '../img/bg-index-sand-800.jpg';
// import bgMQ from '../img/bg-index-sand-1600.jpg';
// import bgHQ from '../img/bg-index-sand-2500.jpg';
import Wojtek2023 from '../img/Wojtek-2023-edited.jpg';
import Header from '../img/speaking/header.jpg';
import cover from "../img/cover/photo-1699444030607-f5014face831.jpg"

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
  // {
  //   id: 5,
  //   url: 'http://instagram.com/expatowy'
  // },
  {
    id: 6,
    type: 'email',
    url: 'mailto:wojtek@wojtekzajac.com'
  }
];

const Content = styled.section`
  margin: 20vh auto 0;
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
  background-image: 
    url(${cover});
    filter: sepia(0) saturate(1) brightness(1.05);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
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

  svg {
    background: rgba(0,0,0,1);
  }
`;


class Home extends React.Component {
  render() {
    return (
      <section>
        <Helmet >
          <link rel="preload" href={Wojtek2023} as="image" />
          <link rel="preload" href={Header} as="image" />
        </Helmet>
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