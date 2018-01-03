import React from 'react';
import Link from 'gatsby-link';

class Experience extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	render() {
		return (
			<div>
				<p>
					I've got 17 years of experience with front-end development and 7 years
					of experience with leading distributed teams.
				</p>
				<p>Howdy. I am a front-end engineer based in Kraków, Poland.</p>

				<p>
					I specialize in JavaScript, web accessibility and user experience
					engineering. I’ve started the Kraków office of Xfive.co. I currently
					work with X-Team.com.
				</p>

				<p>
					Typography (especially vintage book covers) is my obsession. I
					sometimes pretend to be a public speaker. Other times I take photos
					with Instax or my phone.
				</p>

				<h2>Experience</h2>
				<h3>Development</h3>
				<p>asdf</p>
				<h3>Leadership</h3>
				<p>sadf</p>
			</div>
		);
	}
}

export default Experience;
