/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Content
 */

import React from 'react';
import _ from 'lodash';

import About from '../sections/About';
import Achievements from '../sections/Achievements';
import Education from '../sections/Education';
import Project from '../sections/Project';
import WorkExperience from '../sections/WorkExperience';
import styles from '@/styles/Home.module.css';
import { about } from '@/config/about';
import { achievements } from '@/config/achievements';
import { education } from '@/config/education';
import { experience } from '@/config/experience';
import { projects } from '@/config/project';

const config = [
	{ key: about.id, children: <About /> },
	{ key: experience.id, children: <WorkExperience /> },
	{ key: projects.id, children: <Project /> },
	{ key: education.id, children: <Education /> },
	{ key: achievements.id, children: <Achievements /> },
];

const Sections: React.FC = () => {
	return (
		<div className={styles.content}>
			{_.map(config, ({ key, children }) => (
				<div key={key} id={key}>
					<div className={styles.contentHeader}>{key}</div>
					{children}
				</div>
			))}
		</div>
	);
};

export default Sections;
