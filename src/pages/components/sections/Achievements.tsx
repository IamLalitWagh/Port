/**
 *@author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Achievements
 */

import React from 'react';
import _ from 'lodash';

import styles from '@/styles/Home.module.css';
import { achievements } from '@/config/achievements';

const Achievements: React.FC = () => {
	return (
		<div className={styles.achievementsCard}>
			{_.map(achievements.content, (value, key) => (
				<div className={styles.achievements} key={key.toString()}>
					<div className={styles.year}>{value.year}</div>
					<div className={styles.text}>{value.achivement}</div>
				</div>
			))}
		</div>
	);
};

export default Achievements;
