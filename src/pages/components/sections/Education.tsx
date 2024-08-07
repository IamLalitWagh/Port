/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Education
 */

import React from 'react';
import _ from 'lodash';
import { ArrowRightOutlined } from '@ant-design/icons';

import styles from '@/styles/Home.module.css';
import { education } from '@/config/education';

const Education: React.FC = () => {
	return (
		<div>
			{_.map(education.content, (edu) => (
				<div key={edu.college} className={styles.education}>
					<a className={styles.title} target='_blank' href={edu.website}>
						{edu.college} <ArrowRightOutlined className={styles.smallSvg} />
					</a>
					<div className={styles.company}>{edu.degree}</div>
					<p className={styles.paragraph}>{edu.description}</p>
				</div>
			))}
		</div>
	);
};

export default Education;
