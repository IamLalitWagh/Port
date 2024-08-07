/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Projects
 */

import React from 'react';
import _ from 'lodash';

import styles from '@/styles/Home.module.css';
import { projects } from '@/config/project';
import { ArrowRightOutlined } from '@ant-design/icons';

const Project: React.FC = () => {
	return (
		<div>
			{_.map(projects.content, ({ title, tags, description, year }) => (
				<div key={title} className={styles.card}>
					<div>{year}</div>
					<div>
						<div className={styles.title}>{title}</div>
						<p className={styles.paragraph}>{description}</p>
						<ul>
							{_.map(tags, (tag) => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default Project;
