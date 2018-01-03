import React from 'react';
import styled from 'styled-components';
import travels from '../../data/wojtek.json';

console.log(travels.trips);

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

		<iframe
			width="100%"
			height="445"
			style={{ background: '#f9f9f9' }}
			src="https://nomadlist.com/@wojtek/embed"
			scrolling="no"
			frameBorder="0"
			allowFullScreen
		/>

		<table>
			<tbody>
				{travels.trips.map((trip, i) => (
					<tr key={i}>
						<td>{trip.country}</td>
						<td>{trip.place}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
