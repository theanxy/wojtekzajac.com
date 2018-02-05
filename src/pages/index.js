import React from 'react';
import Link from 'gatsby-link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Content = styled.section`
  margin: 0 auto;
  width: 600px;
  position: relative;
  text-align: center;
`;

const Heading = styled.h1`
  padding-top: 30vh;
  font-size: 60px;
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

class Home extends React.Component {
  render() {
    return (
      <section>
        <Content>
          <Heading>Wojtek Zając</Heading>
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
      </section>
    );
  }
}

export default Home;
