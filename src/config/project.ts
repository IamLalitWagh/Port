/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description project
 */

interface IProject {
	title: string;
	description: string;
	tags: string[];
	year: string;
}

interface IProjects {
	id: string;
	content: IProject[];
}

const projects: IProjects = {
	id: 'projects',
	content: [
		{
			title: 'Pet e-commerce Website',
			description:
				"Petify is a one-stop shop for all your pet's needs. This website  offers you a wide range of pet supplies and goods to keep your pet healthy and happy. Find everything you need for your pet's well-being at Petify.",
			tags: ['JavaScript', 'CSS', 'HTML', 'React','Spring Tool', 'Java','MYSQL'],
			year: '2024',
		},
		{
			title: 'Personal Portfolio',
			description:
				'Website which explains more about my personal, professional & educational journey',
			tags: ['Javascript', 'CSS', 'HTML','Next'],
			year: '2024',
		},
		{
			title: 'SatvaBazar',
			description:
				"Logistics-based B2B agriculture marketplace with 100% transparency. Retailers can get doorstep delivery directly from the farm. We have made farmer's and retailer's logistics nightmares go away with a single-integrated supply chain. ",
			tags: ['JavaScript', 'CSS', 'HTML', 'React','Spring Tool', 'Java','MYSQL'],
			year: '2024',
		},
	],
};

export { projects };
