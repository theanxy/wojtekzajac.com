import React from 'react';
import Link from 'gatsby-link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

import Mugshot from '../img/Wojtek.jpg';

const Img = styled.img`
  position: absolute;
  width: 700px;
  left: 50%;
  margin-left: -600px;
  display: block;
`;

const Content = styled.section`
  float: right;
  width: 600px;
  position: relative;
`;

const Social = styled.ul`
  list-style: none;
  margin: 0;
`;

const Icon = styled.li`
  display: inline-block;
  padding-right: 5px;
`;

const social = [
  {
    id: 1,
    url: 'http://linkedin.com/in/wojciechzajac'
  },
  {
    id: 2,
    url: 'http://twitter.com/theanxy'
  },
  {
    id: 3,
    url: 'http://github.com/theanxy'
  },
  {
    id: 4,
    type: 'itunes',
    url: 'http://last.fm/user/buterux'
  },
  {
    id: 5,
    url: 'http://instagram.com/theanxy'
  },
  {
    id: 6,
    type: 'email',
    url: 'mailto:wojtek@wojtekzajac.com'
  }
];

const Home = () => (
  <section>
    <img src={Mugshot} alt="Wojtek" className="introImg" />

    <Content>
      <p>Howdy. I am a front-end engineer based in Kraków, Poland.</p>

      <Social>
        {social.map(link => (
          <Icon key={link.id}>
            <SocialIcon
              url={link.url}
              color="rgba(0,0,0,.5)"
              network={link.type}
              style={{ height: 30, width: 30 }}
            />
          </Icon>
        ))}
        <li>wojtek.photo</li>
      </Social>
    </Content>

    <section style={{ clear: 'both' }}>
      <h3>Latest articles</h3>

      <ul>
        <li>
          <strong>Summary of 2017</strong>
          <br />September 1, 2016
        </li>
        <li>
          <strong>Summary of 2016</strong>
          <br />September 1, 2016
        </li>
      </ul>
    </section>

    <section style={{ clear: 'both' }}>
      <h3>Latest Instagram posts</h3>
    </section>
  </section>
);

export default Home;
