/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Experience
 */

import React from 'react';
import _ from 'lodash';
import { ArrowRightOutlined } from '@ant-design/icons';

import styles from '@/styles/Home.module.css';
import { experience } from '@/config/experience';

const WorkExperience: React.FC = () => {
	return (
		<div>
			{_.map(experience.content, ({ title, tags, company, description, start, end }) => (
				<div key={title} className={styles.card}>
					<div>{`${start} -- ${end}`}</div>
					<div>
						<div className={styles.title}>{title}</div>
						<a className={styles.company} target='_blank' href={company.website}>
							{company.name} <ArrowRightOutlined className={styles.smallSvg} />
						</a>
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

export default WorkExperience;
