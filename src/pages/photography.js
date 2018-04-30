import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  // display: flex;
`;

const About = styled.article`
  margin-left: 40px;
  font-size: 13px;
`;

// const Img = styled.img``;

class Experience extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <Container>
          <p>Over the years, I've created a few photo projects.</p>

          <ul>
            <li>
              <div className="photo">
                <img
                  src="//placehold.it/900x200"
                  width="400"
                  height="400"
                  alt="Map"
                />
              </div>
              <div className="desc">
                <p>Wojtek.photo</p>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default Experience;
