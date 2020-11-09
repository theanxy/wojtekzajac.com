import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Kenya from '../img/swahilibox/swahilibox.jpg';

const SwahiliboxPage = styled.div`
  line-height: 1.8;

  @media (min-width: 650px) {
    margin: 0 2.5em;
  }

  @media (min-width: 850px) {
    margin: 0 5em;

    p {
      margin-right: 20%;
    }
  }

  .caption {
    display: block;
    margin: -35px 10px 20px;
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }

  p,
  ul {
    font-size: 14px;

    strong {
      font-weight: 600;
    }
  }

  li {
    margin-bottom: 0.2em;
  }

  .intro {
    font-size: 18px;
    margin-right: 0;
  }
`;

class Swahilibox extends React.Component {
  render() {
    return (
      <SwahiliboxPage>
        <Helmet
          title="I need your help — Wojtek Zając"
          meta={[
            {
              name: 'description',
              content: 'A perfect opportunity to support a thriving technical community in Mombasa.'
            }
          ]}
        />
        <h1>I need your help! (Apologies for the clickbait 😉)</h1>

        <img src={Kenya} alt="Wojtek in Kenya" />
        <small className="caption">Last week, assisting students in Mombasa</small>

        <p className="intro">Hello friend,</p>
        <p className="intro">
          It's Wednesday, September 11th. I'm reaching out to you personally as I consider you someone who has inspired
          me in the past or just someone I genuinely look up to.
        </p>
        <p>
          <strong>
            I’m currently in Mombasa, Kenya during the 4th and final week of volunteering at a local NGO, SwahiliBox.
          </strong>{' '}
          For the past month, along with 2 colleagues of mine, we've been running various technical workshops.
        </p>
        <p>
          <strong>Yesterday</strong>, I've announced that I can run one more workshop this week, asking about the topic
          they would like me to cover.
        </p>
        <p>
          To my excitement, they've mentioned that{' '}
          <strong>they'd love to cover entrepreneurship and soft skills</strong>. I couldn't be happier about that!
          However, I then realized that after 3 weeks spent with them, distributing this process could both produce
          better results in terms of diversifying ideas, but also have a bigger impact that should hopefully push them
          to act more boldly :)
        </p>

        <h2>The idea</h2>

        <p style={{ fontSize: 16 }}>
          <strong>
            I'd like to create a compilation of short videos encouraging Swahilibox members to take action while keeping
            focused on their goals and thinking big.
          </strong>
        </p>
        <p>
          Ideally, a video should include at least one tip connected to:{' '}
          <strong>
            community leadership, networking, being searchable, understanding how to self-direct their growth, improving
            soft skills, validating business ideas, not being afraid to fail, etc.
          </strong>{' '}
          (Anything that would boost their careers other than technical skills, really.)
        </p>

        <h2>Rules</h2>
        <ul>
          <li>start with "hello swahilibox!"</li>
          <li>please don't mention me at all</li>
          <li>
            feel free to refer to your past experiences (explain how TAKING ACTION resulted in a very tangible and
            positive outcome)
          </li>
          <li>as for the duration, anything between 5 seconds and 5 minutes works</li>
          <li>horizontal orientation is strongly preferred, but not required</li>
          <li>feel free to forward to your friends if they'd like to contribute as well!</li>
        </ul>

        <h2>Target group</h2>
        <p>
          SwahiliBox currently consists of about 15 talented developers, mostly between 18-26 years old. Some are good
          with IoT, others already published native mobile apps, but the biggest group is eager to keep getting better
          at web development.
        </p>
        <p>
          Below are some of the members who stand out from the crowd, I think by referencing them personally we could
          have a bigger impact.
        </p>
        <ul>
          <li>
            <strong>Maria</strong>: an extremely dedicated person working long hours
          </li>
          <li>
            <strong>Isaac Nyakoi (Python Dev Entrepreneur)</strong>: He has been very dedicated in how he keeps coming
            to the space and loves to help others. He has started doing workshops when asked around Python and has even
            been teaching python in a bootcamp style learning environment. He also has his own startup which is in
            development stage.
          </li>
          <li>
            <strong>Abdallah</strong>:
          </li>
          <li>
            <strong>Dennis onkangi (IOT and Web Dev)</strong> has created Impact innovations to help communities
            including a very recent addition called TeleTap targeting Pregnant mothers during their pregnancy period.
            Since we all know miscarriages happen alot in africa due to long response times from medical personel. Thus
            they are making a small gadget that will allow for faster communication to health workers when a pregnant
            mother is in need of medical help.
          </li>
          <li>
            <strong>Abae Akili (Web and graphics Dev)</strong> Very dedicated to the community Runs workshops at
            SwahiliBox and does alot to help within SwahiliBox itself. He has a startup that looks at engaging people
            with emergency services closing the gap between the two entities.
          </li>
          <li>
            <strong>Muzammil Khan - (IOT Dev)</strong> A very energetic young highschool individual that has been
            instrumental in keeping the fire of IOT learning Alive at SwahiliBox he is doing his A-Levels and juggles
            full time education with being a vibrant community member.
          </li>
          <li>… TBD</li>
        </ul>

        <h2>Deadline</h2>
        <p>
          Our final session takes place on Friday, so{' '}
          <strong>I will need to receive all videos by Thursday, EOD</strong>. Afterwards, I'd like to screen it in
          front of the entire group.
        </p>
        <p>
          As soon as this project ends, you will get a link to the finished video. Every help counts and this is a
          chance for you to really influence the lives of these students. Any questions, just let me know!
        </p>

        <p className="intro">
          Please send recorded videos until Thursday, EOD via email / dropbox / google drive / youtube to:{' '}
          <a href="mailto:kenya@wojtekzajac.com">kenya@wojtekzajac.com</a>
        </p>
      </SwahiliboxPage>
    );
  }
}

export default Swahilibox;
