/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description About me
 */

import React from 'react';
import _ from 'lodash';

import styles from '@/styles/Home.module.css';
import { about } from '@/config/about';

const About: React.FC = () => {
	return (
		<div className={styles.about}>
			{_.map(about.content, (value, key) => (
				<p key={key.toString()}>{value}</p>
			))}
		</div>
	);
};

export default About;
