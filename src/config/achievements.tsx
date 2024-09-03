/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Achievements
 */

import React from 'react';

import styles from '@/styles/Home.module.css';

interface IContent {
	year: string;
	achivement: string | JSX.Element;
}

interface IAchievements {
	id: string;
	content: IContent[];
}

const achievements = {
	id: 'achievements & certifications',
	content: [
		{
			year: '2012',
			achivement: (
				<>
					<span>I Achieved a Rank Under 1000 across India </span>
					<span className={styles.bold}>Indian National Mathematics Olympiad</span>
				</>
			),
		},
		{
			year: '2012',
			achivement: (
				<>
					<span>I Achieved a Rank Under 100 in Maharashtra State </span>
					<span className={styles.bold}>Science Olympiad Foundation</span>
				</>
			),
		},
		{
			year: '2013',
			achivement: (
				<>
					<span>I Achieved a Rank Under 100 in Maharashtra State </span>
					<span className={styles.bold}>Science Olympiad Foundation</span>
				</>
			),
		}
		
	],
};

export { achievements };
