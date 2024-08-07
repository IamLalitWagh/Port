/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Employment config
 */

interface IExperienceProps {
	title: string;
	company: { name: string; website: string };
	description: string;
	tags: string[];
	start: string;
	end: string;
}

interface IExperience {
	id: string;
	content: IExperienceProps[];
}

const experience: IExperience = {
	id: 'experience',
	content: [
		{
			title: 'Entrepreneur-In-Residence',
			company: { name: 'Good Health Company', website: 'https://ghc.health/' },
			description:
				'India’s most trusted men’s health and wellness brand that empowers men with the right resources to be their bestselves. Start your wellness journey with Mars & stay A Cut Above the Rest.',
			tags: [
				'Affiliate EIR',
				'Influencers Management',
				'Revenue Expansion',
				'Partnership Management',
				'Channel Management'
			],
			start: 'April 2023',
			end: 'July 2023',
		},
		{
			title: 'Entrepreneur-In-Residence Intern',
			company: { name: 'Demlea', website: 'https://demlea.wixsite.com/demlea/financemaster' },
			description:
				'Demlea is a platform for children to learn, interact & collaborate to nurture 21st-century extra-curricular & co-curricular skills.',
			tags: ['Content Management', 'Class Management', 'Mentor Hiring', 'Content management'],
			start: 'September 2022',
			end: 'January 2023',
		},
		{
			title: 'Entrepreneur-In-Residence Intern',
			company: { name: 'CattleGuru', website: 'https://cattleguru.in/' },
			description:
				'A D2C Start-Up transforming the Lives of Cattle Farmers! It is an early-stage startup, disrupting the 85 Billion USD Cattle Food Industry.',
			tags: ['Team Management', 'Content Management', 'Dynamic Learning', 'Engaging Solution'],
			start: 'June 2022',
			end: 'August 2022',
		},

		{
			title: 'Personal Project',
			company: { name: 'ServiLaun', website: 'https://appadvice.com/app/servilaun/1609247850' },
			description:
				'ServiLaun is an Online Laundry Marketplace that does doorstep pickup and drops service as per the user desire.',
			tags: ['Marketplace Creation', 'Social Media Management', 'Operations Oversight', 'Client Relations','Partnership Management','Partnership Expansion'],
			start: 'December 2021',
			end: 'April 2022',
		},

	],
};

export { experience };
