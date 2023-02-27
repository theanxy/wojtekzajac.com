import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Wojtek from '../img/Wojtek.jpg';
import WojtekHorizontal from '../img/Wojtek-horizontal2.jpg';
import NYC from '../img/NYC-small.jpg';
import WhoIsHiring from '../img/interviews/whoishiring.jpg';
import JustJoinIt from '../img/interviews/justjoinit.jpg';

const AboutPage = styled.div`
  @media (min-width: 650px) {
    margin: 0 2.5em;
  }

  @media (min-width: 850px) {
    margin: 0 5em;
  }

  h2 {
    font-size: 42px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  h3 {
    font-size: 36px;
  }
`;

const Section = styled.section`
  margin: 0 0 3em;
`;

const Container = styled.div`
  display: flex;
`;

const Pic = styled.div`
  @media (min-width: 650px) {
    margin: 0 -2.5em 0;
  }

  @media (min-width: 850px) {
    margin: 0 -5em 0;
  }

  img {
    margin-bottom: 0;
  }

  small {
    display: block;
    text-align: right;
  }
`;

const Bio = styled.article`
  font-size: 16px;

  @media (min-width: 800px) {
    margin: 2em auto;

    p {
      margin-right: 20%;
    }
  }

  .intro {
    font-size: 20px;
    margin-right: 0;
  }

  aside {
    ol,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    li {
      padding: 10px 0;
    }
  }
`;

const TwoCol = styled.div`
  @media (min-width: 600px) {
    display: flex;

    > div {
      width: 50%;
      padding-left: 20px;

      &:first-of-type {
        padding-left: 0;
        padding-right: 20px;
      }
    }
  }
`;

const Experience = styled.div`
  ul {
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0 0 2em;
    padding-left: 20px;
  }

  [data-xteam]:after {
    content: ' *';
  }

  h4 {
    margin: 0 0 0.5em -20px;
    font-size: 18px;
    font-weight: 400;

    > a {
      border-bottom: 1px solid #ccc;
      padding-bottom: 1px;

      &:after {
        content: ' →';
      }

      &:hover {
        border-color: #000;
      }
    }
  }

  h4 + strong {
    display: block;
    font-weight: 600;
  }

  h4 + strong + p {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const Interviews = styled.section`
  display: flex;
  justify-content: space-between;

  a {
    max-width: 100%;
    position: relative;

    &:after {
      position: absolute;
      content: ' ';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.2);
      z-index: 3;
      transition: all 0.05s;
    }

    &:hover:after {
      background: none;
    }

    > img {
      display: block;
      margin: 0;
    }

    > span {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.8);
      z-index: 5;
      padding: 3px 5px;
    }
  }
`;

const technical = [
  // {
  //   company: <a href="https://x-team.com">X-Team</a>,
  //   title: 'Lead Front-End Engineer',
  //   date: 'Jul 2006 – now'
  // },
  {
    company: 'Euler Labs',
    title: 'Tech Lead UI/UX',
    date: 'Feb 2022 - now',
  },
  {
    company: 'Kaplan, Inc.',
    title: 'Lead Front-End Engineer',
    date: 'Jan 2015 – Mar 2021',
    xteam: true,
  },
  {
    company: 'Fox Broadcasting Company',
    title: 'Senior Front-end Engineer',
    date: 'Jul 2010 – Dec 2014',
    xteam: true,
  },
  {
    company: 'Xfive.co / X-Team',
    title: 'Senior Front-end Engineer',
    date: 'Jul 2006 – Jul 2010',
  },
];

const leadership = [
  {
    company: <a href="http://worldisyouroffice.com/">World is your office</a>,
    title: 'Co-founder, partner',
    date: 'Jun 2018 – Jan 2019',
  },
  {
    company: 'Fox Broadcasting Company',
    title: 'Team Lead',
    date: 'Sep 2013 - Dec 2014',
    xteam: true,
  },
  {
    company: <a href="https://xfive.co">Xfive.co</a>,
    title: 'Branch Manager',
    date: 'Nov 2010 – Dec 2014',
  },
];

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const listExperience = (title, data = []) => (
      <Experience>
        <h3>{title}</h3>
        <ul>
          {data.map((position, i) => (
            <li key={i}>
              <h4 data-xteam={position.xteam}>{position.company}</h4>
              <strong>{position.title}</strong>
              <p>{position.date}</p>
            </li>
          ))}
        </ul>
      </Experience>
    );

    return (
      <AboutPage>
        <Section>
          <Pic>
            {/* <img src={WojtekHorizontal} alt="Wojtek" /> */}
            {/* <small>Chicago, 2017</small> */}
            <img src={NYC} width="960" height="377" alt="Wojtek" />
          </Pic>
        </Section>

        <Section>
          <Container>
            <Bio>
              <p className="intro">
                My name is Wojtek Zając
                <sup className="footnotelink" id="fnhref:pronunciation">
                  <a href="#fn:pronunciation">1</a>
                </sup>
                , and I’m a software engineer. Originally&nbsp;based in Kraków, Poland, I've been{' '}
                <a href="//nomadlist.com/@wojtek">traveling extensively</a> since 2010. Eventually—in 2015—I’ve sold
                some of my bigger possessions, left everything else behind and became a digital nomad.
              </p>
              <p className="intro">
                My professional work is mostly related to front-end development which I got into
                in&nbsp;the&nbsp;early&nbsp;2000’s.
              </p>
              <p>
                Within Front-End, I specialise in Web Accessibility and I’ve given{' '}
                <Link to="/speaking/">several workshops and presentations</Link> on the topic. In 2005, I've published
                the first course of{' '}
                <a href="https://en.wikipedia.org/wiki/Polish_Sign_Language">Polish Sign Language</a> available online.
                Since then, I've been working with major Universities in U.S., UK and Australia, govermental insitutions
                and private companies on making sure their websites comply with accessibility regulations.
              </p>

              <p>
                Over time, I became accustomed to working in teams of different sizes and shapes, both as a member and
                leader. That includes fully distributed (remote-first) groups, physical offices with satellite workers,
                multi-site groups spread between different continents, and traditional single-site teams. I've also
                founded and been running a local office for 4 years scaling it up to 18 people. All of these experiences
                gave me an unique perspective into the dynamics of every model behind remote work and into various kinds
                of communication patterns.
              </p>

              <p>
                Currently, my interests revolve around technical leadership and best ways to foster company culture that
                leverages remote working and asynchronous communication.
              </p>

              <aside className="footnotes">
                <ol>
                  <li id="fn:pronunciation">
                    1. My first name is pronounced “Voitek”. <a href="#fnhref:pronunciation">↩</a>
                  </li>
                </ol>
              </aside>
            </Bio>
          </Container>
        </Section>

        <Section>
          <TwoCol>
            <div>
              <h3>Featured clients</h3>
              <p>Twitter, Kaplan Inc., FOX Broadcasting Company, Riot Games, Rogers Media, Threadless</p>
            </div>
            <div>
              <h3>Recommended stack</h3>
              <p>
                React, Redux, TypeScript, Styled Components, CSS&nbsp;Modules, Web Accessibility, Storybook, Jest,
                Cypress
              </p>
            </div>
          </TwoCol>
        </Section>

        <Section>
          <h2>Experience</h2>
          <TwoCol>
            {listExperience('Technical', technical)}
            {listExperience('Leadership', leadership)}
          </TwoCol>

          <p>
            * Through <a href="https://x-team.com">X-Team</a>
          </p>
          <p>
            For a more detailed work history, please see{' '}
            <a href="https://www.linkedin.com/in/wojciechzajac/">Linkedin</a>.
          </p>
        </Section>

        <Section>
          <h2>Interviews</h2>
          <Interviews>
            <ul>
              <li>
                <a
                  href="https://blog.whoishiring.io/wojtek-zajac-on-his-early-career-remote-work-and-accessibility/"
                  lang="en"
                >
                  [EN] Wojtek Zając on his early career, remote work and accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://geek.justjoin.it/wieku-16-stworzyl-front-end-twittera-dzis-pracuje-klientami-calego-swiata/"
                  lang="pl"
                >
                  [PL] W wieku 16 lat stworzył front-end Twittera. Dziś pracuje z klientami z całego świata
                </a>
              </li>
            </ul>
          </Interviews>
        </Section>
      </AboutPage>
    );
  }
}

export default About;
