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
			year: '2008',
			achivement: (
				<>
					<span>Awarded the prestigious National Scholarship for outstanding performance in the </span>
					<span className={styles.bold}>National Scholarship Exam</span>
				</>
			),
		},
		{
			year: '2012',
			achivement: (
				<>
					<span>Scholarship holder in </span>
					<span className={styles.bold}>National Talent Search Examination (NTSE)</span>
				</>
			),
		},
		{
			year: '2018',
			achivement: (
				<>
					<span>Received </span>
					<span className={styles.bold}>Undergraduate Research Award </span>
					<span>for excellence in the field of engineering research</span>
				</>
			),
		}
		
		
	],
};

export { achievements };
