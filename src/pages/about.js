import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Wojtek from '../img/Wojtek.jpg';
import WojtekHorizontal from '../img/Wojtek-horizontal2.jpg';
import WhoIsHiring from '../img/interviews/whoishiring.jpg';
import JustJoinIt from '../img/interviews/justjoinit.jpg';

const PAGE_PADDING = '5em';

const AboutPage = styled.div`
  margin: 0 ${PAGE_PADDING};

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
  margin: 0 -${PAGE_PADDING} 0;
`;

const Bio = styled.article`
  margin: 2em auto;
  font-size: 18px;
`;

const TwoCol = styled.div`
  display: flex;

  > div {
    width: 50%;
    padding-left: 20px;

    &:first-of-type {
      padding-left: 0;
      padding-right: 20px;
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
    display: block;
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
    }
  }
`;

const technical = [
  {
    company: <a href="https://x-team.com">X-Team</a>,
    title: 'Lead Front-End Engineer',
    date: 'Jul 2006 – now'
  },
  {
    company: 'Kaplan, Inc.',
    title: 'Lead Front-End Engineer',
    date: 'Jan 2015 – now'
  },
  {
    company: 'Fox Broadcasting Company',
    title: 'Senior Front-end Engineer',
    date: 'Jul 2010 – Aug 2013'
  }
];

const leadership = [
  {
    company: <a href="http://worldisyouroffice.com/">World is your office</a>,
    title: 'Co-founder, partner',
    date: 'Jun 2018 – now'
  },
  {
    company: 'Fox Broadcasting Company',
    title: 'Team Lead',
    date: 'Sep 2013 - Dec 2014'
  },
  {
    company: <a href="https://xfive.co">Xfive.co</a>,
    title: 'Branch Manager',
    date: 'Nov 2010 – Dec 2014'
  }
];

class About extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    const listExperience = (title, data = []) => (
      <Experience>
        <h3>{title}</h3>
        <ul>
          {data.map((position, i) => (
            <li key={i}>
              <h4>{position.company}</h4>
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
            <img src={WojtekHorizontal} alt="Wojtek" />
          </Pic>
        </Section>

        <Section>
          <Container>
            <Bio>
              <p>
                Wojtek is a 28 years old technical leader with 18 years of
                experience in front-end engineering and 8 years of experience in
                leading co-located or distributed teams.
              </p>

              <p>
                Originally based in Kraków, Poland, he became a digital nomad in
                2015 and travels around the world since then.
              </p>

              <p>
                He specializes in JavaScript, web accessibility and user
                experience engineering. Passionate with remote work
                {/* He's started the Kraków office of{' '}
              <a href="https://xfive.co">Xfive.co</a>. I currently work with
              X-Team.com. */}
              </p>
            </Bio>
          </Container>
        </Section>

        <Section>
          <TwoCol>
            <div>
              <h3>Featured clients</h3>
              <p>
                Twitter, Kaplan Inc., FOX Broadcasting Company, Riot Games,
                Rogers Media, Threadless
              </p>
            </div>
            <div>
              <h3>Skills</h3>
              <ul>
                <p>React, Angular.js, Styled Components, </p>
              </ul>
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
            For more details, please see my{' '}
            <a href="https://www.linkedin.com/in/wojciechzajac/">Linkedin</a>{' '}
            profile.
          </p>
        </Section>

        <Section>
          <h2>Interviews</h2>
          <Interviews>
            <TwoCol>
              <div>
                <a href="https://blog.whoishiring.io/wojtek-zajac-on-his-early-career-remote-work-and-accessibility/">
                  <img src={WhoIsHiring} alt="" />
                  <span>
                    [EN] Wojtek Zając on his early career, remote work and
                    accessibility
                  </span>
                </a>
              </div>
              <div>
                <a href="https://geek.justjoin.it/wieku-16-stworzyl-front-end-twittera-dzis-pracuje-klientami-calego-swiata/">
                  <img src={JustJoinIt} alt="" />
                  <span>
                    [PL] W wieku 16 lat stworzył front-end Twittera. Dziś
                    pracuje z klientami z całego świata
                  </span>
                </a>
              </div>
            </TwoCol>
          </Interviews>
        </Section>
      </AboutPage>
    );
  }
}

export default About;
