import React from 'react';
import styled from 'styled-components';
import travels from '../../data/wojtek.json';

const Heading = styled.header`
  width: 100%;
  height: 200px;
  background: red;
`;

// fetch('../../data/wojtek.json')
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data);
// 	});

export default () => (
  <div className="container">
    {/* <Heading /> */}

    {/* <iframe
			width="100%"
			height="445"
			style={{ background: '#f9f9f9' }}
			src="https://nomadlist.com/@wojtek/embed"
			scrolling="no"
			frameBorder="0"
			allowFullScreen
		/> */}
    <img src="//placehold.it/900x200" alt="Map" />

    <section>
      <h2>FAQ</h2>
      <dl>
        <dt>Favorite place?</dt>
        <dd>That must be Chicago.</dd>
      </dl>
    </section>

    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Dates</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {travels.trips.map((trip, i) => (
          <tr key={i}>
            <td>{trip.country}</td>
            <td>{trip.place}</td>
            <td>
              {trip.date_start} – {trip.date_end}
            </td>
            <td>{trip.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
