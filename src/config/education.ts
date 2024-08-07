/**
 *@author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Education
 */

interface IContent {
	college: string;
	website: string;
	degree: string;
	description: string;
}

interface IEducation {
	id: string;
	content: IContent[];
}

const education: IEducation = {
	id: 'education',
	content: [
		{
			college: 'C-DAC Acts Pune',
			website: 'https://www.cdac.in/index.aspx?id=PN',
			degree: 'Post Graduation Diploma in Advanced Computing',
			description:
				"I had the privilege of studying at CDAC ACTS Pune, where I completed both my graduation and a Post Graduate Diploma in Advanced Computing. This course shaped me with value of Tech approach person.",
		},
		{
			college: 'VIT Bhopal University',
			website: 'https://vitbhopal.ac.in/',
			degree: 'B-Tech in Computer Science(Specialisation in Gaming Technology)',
			description:
				'I had the privilege of studying at VIT Bhopal University, where I completed both my graduation in Computer Science with a specialization in Gaming Technology. Beyond the exceptional academic environment, VIT Bhopal University instilled in me the value of holistic development. During my four years there, I was actively involved in the Entrepreneurship Cell and the Gaming Cell. These experiences allowed me to nurture my personal growth, enhance my leadership abilities, foster teamwork, and contribute to shaping me into a well-rounded individual.',
		},
	],
};

export { education };
