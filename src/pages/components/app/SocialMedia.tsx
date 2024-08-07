/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Social Media
 */

import React from 'react';
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';

import styles from '@/styles/Home.module.css';

const SocialMedia: React.FC = () => {
	return (
		<div className={styles.socialMediaWrapper}>
			<div className={styles.socialMedia}>
				<a href='https://www.linkedin.com/in/iamlalitwagh/' target='_blank'>
					<LinkedinFilled className={styles.linkedin} />
				</a>
				<a href='https://github.com/Redmanghost' target='_blank'>
					<GithubFilled className={styles.github} />
				</a>
				<a href='mailto:lalit.sanjaywagh@gmail.com'>
					<MailFilled className={styles.mail} />
				</a>
				<a href='https://www.instagram.com/iamlalitwagh/' target='_blank'>
					<InstagramFilled className={styles.instagram} />
				</a>
				
			</div>
			<p className={`${styles.paragraph} ${styles.disclaimer}`}>Copyright © 2025 | Lalit Sanjay Wagh</p>
		</div>
	);
};

export default SocialMedia;
