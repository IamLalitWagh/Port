/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description About section
 */


interface IAbout {
	id: string;
	content: string | JSX.Element;
}

const about = {
	id: 'about',
	content: [
		" Welcome! I'm thrilled to have you here. Allow me to introduce myself — I'm a passionate Developer with excellent academic credentials and professional experience in leadership, technology, and management.",
		"At present, I'm transitioning from an entrepreneurial strategy role to software development. Previously, I am proficient in Java, Spring Boot, C++, and React, I have hands-on experience in both backend and frontend development. I served as an Entrepreneur in Residence, where I sharpened my problem-solving, communication, and content management skills, preparing me to tackle diverse challenges in the tech world.",
		'I pride myself on being concise and clear in my communication, enabling me to collaborate with diverse teams effectively.',
	],
};

export { about };
