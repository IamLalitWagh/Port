/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Navigation component
 */

import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import styles from '@/styles/Home.module.css';
import { about } from '@/config/about';
import { achievements } from '@/config/achievements';
import { education } from '@/config/education';
import { experience } from '@/config/experience';
import { projects } from '@/config/project';

const Navigation: React.FC = () => {
	const [visibleId, setVisibleId] = useState(about.id);

	useEffect(() => {
		const listener = () => {
			const ids = [about.id, experience.id, education.id, projects.id, achievements.id];

			_.forEach(ids, (id) => {
				const ele = document.getElementById(id);
				if (ele) {
					const rect = ele.getBoundingClientRect();
					if (
						rect.top >= 0 &&
						rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
					) {
						setVisibleId(id);
					}
				}
			});
		};

		if (window.innerWidth > 1024) {
			window.addEventListener('scroll', listener, false);
		}

		return () => {
			if (window.innerWidth >= 1024) {
				window.removeEventListener('scroll', listener);
			}
		};
	}, []);

	return (
		<div className={styles.navWrapper}>
			<div>
				<a
					href={`#${about.id}`}
					className={`${styles.navigation} ${visibleId === about.id ? styles.visible : ''}`}
				>
					<span />
					<span>About</span>
				</a>
			</div>
			<div>
				<a
					href={`#${experience.id}`}
					className={`${styles.navigation} ${visibleId === experience.id ? styles.visible : ''}`}
				>
					<span />
					<span>Experience</span>
				</a>
			</div>
			<div>
				<a
					href={`#${projects.id}`}
					className={`${styles.navigation} ${visibleId === projects.id ? styles.visible : ''}`}
				>
					<span />
					<span>Projects</span>
				</a>
			</div>
			<div>
				<a
					href={`#${education.id}`}
					className={`${styles.navigation} ${visibleId === education.id ? styles.visible : ''}`}
				>
					<span />
					<span>Education</span>
				</a>
			</div>
			<div>
				<a
					href={`#${achievements.id}`}
					className={`${styles.navigation} ${visibleId === achievements.id ? styles.visible : ''}`}
				>
					<span />
					<span>Achievements & certifications</span>
				</a>
			</div>
		</div>
	);
};

export default Navigation;
