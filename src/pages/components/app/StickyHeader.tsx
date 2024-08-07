/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description Sticky Header
 */

import React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import styles from '@/styles/Home.module.css';

const StickyHeader: React.FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.imageWrapper}>
					<Image src='/mypic.jpg' width={112} height={112} style={{ borderRadius: '9999px' }} alt='TW' />
					<div>
						<h1>Lalit Sanjay Wagh</h1>
						<h2>Software Developer | VIT Bhopal</h2>
					</div>
				</div>
				<p>
					{
						'Engineering graduate with a PG Diploma in Advanced Computing, blending technical and business expertise with hands-on project experience.'
					}
				</p>
				<a href='Resume.pdf' target='_blank' className={styles.resume}>
					View Resume <ArrowRightOutlined className={styles.smallSvg} />
				</a>
				<Navigation />
			</div>
			<SocialMedia />
		</div>
	);
};

export default StickyHeader;
