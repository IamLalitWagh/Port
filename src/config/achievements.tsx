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
		},
		{
			year: '2019',
			achivement: (
				<>
					<span>Awarded with </span>
					<span className={styles.bold}>AA grade </span>
					<span>in credit-based Industry Internship at Mumbai Railway Vikas Corporation</span>
				</>
			),
		},
		{
			year: '2021',
			achivement: (
				<>
					<span className={styles.bold}>Department rank 2 </span>
					<span>in DD program, demonstrating exceptional academic performance with </span>
					<span className={styles.bold}>CGPA 8.54/10</span>
				</>
			),
		},
		{
			year: '2021',
			achivement: 'Python and Statistics for Financial Analysis (Coursera)',
		},
		{
			year: '2021',
			achivement: 'Python 3 tutorial Course (SoloLearn)',
		},
	],
};

export { achievements };
