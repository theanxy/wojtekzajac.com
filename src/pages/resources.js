import React from 'react';
import styled from 'styled-components';

const Resources = styled.section`
  padding-left: 50px;
  margin: 0 auto;
  max-width: 800px;

  h2 {
    font-size: 32px;
    margin-left: -50px;
    font-family: 'Amatic Sc', sans-serif;

    a {
      position: relative;
      color: inherit;
      border: 0;

      &:hover:before {
        position: absolute;
        left: -1.1ex;
        content: '#';
        color: #ccc;
        font-style: italic;
      }
    }
  }

  h3 {
    font-size: 24px;
    font-family: 'Amatic Sc', sans-serif;
    margin-top: 2em;
  }

  li {
    margin-left: -1.5em;
    position: relative;
    list-style: none;

    &:before {
      position: absolute;
      top: -4px;
      left: -2.5ex;
      display: inline-block;
      width: 20px;
      font-size: 1.5em;
      color: #777;
      content: '\u261E';
    }
  }

  a {
    color: #6161ca;
    border-bottom: 1px solid #ccc;
  }

  a:hover {
    border: 0;
  }
`;

export default () => (
  <Resources>
    <h2 id="speaking">
      <a href="#speaking">Public speaking</a>
    </h2>
    <ul>
      <li>
        <a href="http://developer-evangelism.com/toc.php">
          Developer Evangelism
        </a>{' '}
        – Chris is a really experienced technical speaker and shared a couple of
        good tips, e.g. about sharing your slides on Twitter even before you get
        on stage
      </li>
      <li>
        <a href="https://speaking.io/">Tips for Public Speaking</a> – also
        here’s a summary from the same author:{' '}
        <a href="https://zachholman.com/talk/the-talk-on-talks/">
          The Talk on Talks
        </a>
      </li>
      <li>
        <a href="http://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk/">
          How to prepare and write a tech conference talk
        </a>{' '}
        – an even more concise version of the two above
      </li>
    </ul>
    <h3 id="blog-posts">Blog Posts</h3>
    <ul>
      <li>
        <a href="https://www.sparkol.com/en/Blog/8-Classic-storytelling-techniques-for-engaging-presentations">
          8 Classic storytelling techniques for engaging presentations
        </a>{' '}
        storytelling is something that really can differentiate you. if you’re
        looking into learning more, attend at least one Toastmasters event
      </li>
      <li>
        <a href="https://www.troyhunt.com/speaker-style-bingo-10-presentation/">
          Speaker style bingo: 10 presentation anti-patterns
        </a>{' '}
        the easiest way to spot a beginner, or: how to not be seen as one
      </li>
			<li>
				<a href="https://justinjackson.ca/speak">Why Geeks Should Speak</a>
			</li>
    </ul>
    <h3 id="books-">Books</h3>
    <ul>
      <li>
        {' '}
        <a href="http://a.co/a37AwyE">Confessions of a Public Speaker</a> — a
        great resource on how to deal with problems on stage, control your
        voice, keep your audience attentive, etc.
      </li>
      <li>
        <a href="http://a.co/0ZtWV0x">Talk Like TED</a> — you simply can’t go
        wrong with TED school of public speaking
      </li>
      <li>
        <a href="https://abookapart.com/products/demystifying-public-speaking">
          Demystifying Public Speaking
        </a>{' '}
        — I haven’t read this one yet, but I hold Laura in high regard
      </li>
    </ul>
    <h3 id="videos-">Videos</h3>
    <ul>
      <li>
        {' '}
        <a href="https://archive.org/details/devworld2017-speakertraining">
          A 10 Step Program for Great Tech Talks
        </a>
      </li>
      <li>
        {' '}
        <a href="https://www.youtube.com/watch?v=l9JXH7JPjR4">
          How to Talk to Developers
        </a>
      </li>
      <li>
        {' '}
        <a href="https://www.ted.com/talks/daniel_levitin_how_to_stay_calm_when_you_know_you_ll_be_stressed">
          How to stay calm when you know you’ll be stressed
        </a>
      </li>
    </ul>
    <h3 id="organisations-">Organisations</h3>
    <ul>
      <li>
        <a href="https://www.toastmasters.org/Find-a-Club">Toastmasters</a> — a
        network of clubs that exist in most large cities. An amazing way to
        practice your skills. Highly recommended
      </li>
    </ul>
    <h3 id="hosting-your-slides">Hosting your slides</h3>
    <ul>
      <li>
        Even though <a href="http://slideshare.net">Slideshare</a> used to be
        the most popular, a lot of people people have moved to{' '}
        <a href="https://speakerdeck.com/">SpeakerDeck</a>
      </li>
      <li>
        <a href="https://noti.st">Noti.st</a> is a new player in town that looks
        very promising
      </li>
    </ul>
    <h3 id="where-to-find-a-conference-to-speak-at-">
      Where to find a conference to speak at:
    </h3>
    <ul>
      <li>
        <a href="https://github.com/asciidisco/web-conferences-2018">
          Web Development Conferences 2018
        </a>
      </li>
      <li>
        <a href="https://github.com/asciidisco/cfp-magick">cfp-magick</a> if you
        prefer CLI
      </li>
    </ul>
  </Resources>
);
