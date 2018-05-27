import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import wojtekPhoto from '../img/photography/wojtek.photo.png';
import stories from '../img/photography/stories.png';
import blog from '../img/photography/blog.png';
import now from '../img/photography/now.png';

const CameraList = styled.ul`
  columns: auto 2;

  li {
    margin: 0 0 0 20px;
  }
`;

const ProjectIntro = styled.p`
  margin: 4em 0 0;
`;

const Projects = styled.ul`
  margin: 2em 2em 4em;

  li {
    list-style: none;
    margin-bottom: 2em;
  }
`;

const ProjectLink = styled.a`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 15px #ccc;
    background: rgba(255, 255, 255, 0.2);
  }

  ${props =>
    props.disabled &&
    `
		pointer-events: none;
		opacity: 0.5;
	`};
`;

const Photo = styled.div`
  float: left;
  width: 150px;
  flex-shrink: 0;
`;

const Desc = styled.div`
  padding: 1em;
  flex-grow: 1;
`;

const Img = styled.img`
  display: block;
  border: 1px solid #ccc;
`;

class Experience extends React.Component {
  constructor() {
    super();
  }

  render() {
    const Sites = [
      {
        name: 'wojtek.photo',
        url: '//wojtek.photo',
        img: wojtekPhoto,
        desc: <p>My favorite photos, grouped by a continent and country.</p>
      },
      {
        name: 'Stories (in progress)',
        url: '//stories.wojtekzajac.com',
        img: stories,
        isInProgress: true,
        desc: <p>Adding a bit of narrative behind some of my more carefully planned trips.</p>
      },
      {
        name: 'Blog',
        url: 'http://blog.wojtekzajac.com',
        img: blog,
        desc: <p>An attempt to show what am I do it in a linear fashion.</p>
      },
      {
        name: 'Wojtek Now',
        url: 'http://now.wojtekzajac.com',
        img: now,
        desc: (
          <p>I really enjoy instant photography. Sometimes I also try to remember moments behind each photo better.</p>
        )
      }
    ];

    return (
      <div>
        <p>
          Photography is a major passion of mine and something that really lets me relax. I find lots of joy in the
          process of taking photos, which often includes getting to know a given place much better than you would just
          by being a tourist.
        </p>

        <p>
          It’s also something that lets me remember places that I visit much better. If only I wouldn’t need to spend so
          much time selecting and processing them… :-)
        </p>

        <p>I shoot with the following cameras:</p>

        <CameraList>
          <li>
            Canon 6D (Sigma 35mm, Canon 50mm f/1.4, Canon 16-35, Canon 24-70 f/4, Canon 70-200 f/4 with some lighting
            gear)
          </li>
          <li>FUJI X100F</li>
          <li>Instax Classic</li>
          <li>’74 Polaroid SX-70</li>
          <li>’02 Polaroid</li>
          <li>Diana F+</li>
          <li>a few older film cameras.</li>
        </CameraList>

        <ProjectIntro>
          Over the years, I've created a few photo projects that I’m particularly proud of. Here the are:
        </ProjectIntro>

        <Projects>
          {Sites.map((site, i) => (
            <li key={i}>
              <ProjectLink href={site.url} disabled={site.isInProgress}>
                <Photo>
                  <Img width="150" height="150" src={site.img || '//placehold.it/150x150'} alt={site.name} />
                </Photo>
                <Desc>
                  <h2>{site.name}</h2>
                  {site.desc}
                </Desc>
              </ProjectLink>
            </li>
          ))}
        </Projects>
      </div>
    );
  }
}

export default Experience;
