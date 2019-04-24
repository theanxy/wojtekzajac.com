import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const BookPage = styled.form`
  @media (min-width: 650px) {
    margin: 0 2.5em;
  }

  @media (min-width: 850px) {
    margin: 0 5em;
  }

  p {
    font-size: 20px;
  }

  fieldset {
    margin-top: 3em;
    text-align: center;
    border: 0;
  }

  input {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 0 auto 1em;
    padding: 5px 10px;
    font-size: 14px;
  }

  button {
    display: inline-block;
    margin: 0 auto;
    background: orange;
    color: #fff;
    border: 0;
    padding: 5px 10px;

    &:hover {
      background: red;
    }
  }
`;

class Speaking extends React.Component {
  state = {
    email: null
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`);
        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <BookPage onSubmit={this._handleSubmit}>
        <p>
          I’ve started working on a book where I’m going to share tips about
          being a digital nomad. That includes working while on the go, finding
          places where to work from, top digital nomad destinations and more.
        </p>
        <p>If you'd like to hear more, leave your contact details below!</p>
        <fieldset>
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="Your email address"
            name="email"
          />
          <button type="submit">Keep me posted!</button>
        </fieldset>
      </BookPage>
    );
  }
}

export default Speaking;
