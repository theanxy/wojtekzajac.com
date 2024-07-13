import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Wojtek from '../img/Wojtek.jpg';
import Wojtek2023 from '../img/Wojtek-2023-edited.jpg';
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
  margin: 0 -50vw;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 600px) {
    height: 0;
    padding-top: 56.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const Bio = styled.article`
  font-size: 16px;

  @media (min-width: 800px) {
    margin: 0 auto 2em;

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

      // &:after {
      //   content: ' →';
      // }

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
    company: (
      <a href="https://eulerlabs.com" target="_blank" rel="noopener noreferrer">
        Euler Labs
      </a>
    ),
    title: 'Tech Lead UI/UX',
    date: 'Feb 2022 - now',
  },
  {
    company: (
      <a href="https://kaplan.com" target="_blank" rel="noopener noreferrer">
        Kaplan, Inc.
      </a>
    ),
    title: 'Lead Front-End Engineer',
    date: 'Jan 2015 – Mar 2021',
    xteam: true,
  },
  {
    company: (
      <a href="https://fox.com" target="_blank" rel="noopener noreferrer">
        Fox Broadcasting Company
      </a>
    ),
    title: 'Senior Front-end Engineer',
    date: 'Jul 2010 – Dec 2014',
    xteam: true,
  },
  {
    company: (
      <span>
        <a href="https://xfive.co" target="_blank" rel="noopener noreferrer">
          Xfive.co
        </a>{' '}
        /{' '}
        <a href="https://x-team.com" target="_blank" rel="noopener noreferrer">
          X-Team
        </a>
      </span>
    ),
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
    company: (
      <a href="https://fox.com" target="_blank" rel="noopener noreferrer">
        Fox Broadcasting Company
      </a>
    ),
    title: 'Team Lead',
    date: 'Sep 2013 - Dec 2014',
    xteam: true,
  },
  {
    company: (
      <a href="https://xfive.co" rel="noopener noreferrer">
        Xfive.co
      </a>
    ),
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
            <img src={Wojtek2023} alt="Wojtek" />
          </Pic>
        </Section>

        <Section>
          <Container>
            <Bio>
              <p className="intro">
                I’m Wojtek Zając
                <sup className="footnotelink" id="fnhref:pronunciation">
                  <a href="#fn:pronunciation">1</a>
                </sup>
                , a software engineer originally from Kraków, Poland. Since 2010, I've been traveling
                extensively—transitioning to a fully nomadic lifestyle in 2014. Over the past years, I've lived in six
                different countries, embracing the concept of personal sovereignty through location independence.
              </p>
              <p className="intro">
                My professional work is mostly related to front-end development, which I got into in the early 2000s.
              </p>
              <p>
                Within Front-End, I specialize in Web Accessibility, and I've given{' '}
                <Link to="/speaking/">several workshops and presentations</Link> on the topic. In 2005, published the
                first online course of{' '}
                <a href="https://en.wikipedia.org/wiki/Polish_Sign_Language">Polish Sign Language</a>. I've worked with
                major universities in the U.S., UK, and Australia, as well as governmental institutions, ensuring their
                websites comply with accessibility regulations.
              </p>

              <p>
                Throughout my career, I've collaborated with notable clients such as Twitter, Kaplan, Inc., and Riot
                Games on various front-end development projects. I also coordinated the development of high-traffic
                websites for American Idol and The X Factor USA.
              </p>

              <p>
                I've gained experience in diverse team structures, from fully distributed groups to traditional
                single-site teams. For four years, I established and led a local branch of an international software
                house, growing it to 18 team members.
              </p>

              <p>
                Currently, my interests revolve around technical leadership and fostering company culture that leverages
                remote working and asynchronous communication.
              </p>

              <aside className="footnotes">
                <ol>
                  <li id="fn:pronunciation">
                    1. My first name is pronounced "Voitek". <a href="#fnhref:pronunciation">↩</a>
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
              <p>Next.js, Redux, TypeScript, Styled Components, CSS&nbsp;Modules, Web Accessibility, Storybook</p>
            </div>
          </TwoCol>
        </Section>

        <Section>
          <h2>Experience</h2>
          <TwoCol>
            {listExperience('Technical', technical)}
            {listExperience('Leadership', leadership)}
          </TwoCol>

          <p>* Through X-Team</p>
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
                <a href="https://x-team.com/blog/interview-wojtek-zajac" lang="en">
                  [EN] On what it means to be an existential migrant
                </a>
              </li>
              <li>
                <a
                  href="https://blog.whoishiring.io/wojtek-zajac-on-his-early-career-remote-work-and-accessibility/"
                  lang="en"
                >
                  [EN] On early career, remote work and accessibility
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
