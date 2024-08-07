/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description App
 */

import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { Inter } from 'next/font/google';

import Footer from './Footer';
import Sections from './Sections';
import StickyHeader from './StickyHeader';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const App: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: '0', y: '0' });

	useEffect(() => {
		const listener = (e: MouseEvent) => {
			const rect = ref?.current?.getBoundingClientRect();

			setPosition({
				x: `${(e.clientX - _.get(rect, 'x', 0)).toString()}px`,
				y: `${(e.clientY - _.get(rect, 'y', 0)).toString()}px`,
			});
		};

		ref?.current?.addEventListener('mousemove', listener);

		return () => ref?.current?.removeEventListener('mousemove', listener);
	}, []);

	return (
		<main className={`${styles.main} ${inter.className}`}>
			<div
				className={styles['hover-div']}
				style={{
					background: `radial-gradient(600px at ${position.x} ${position.y}, rgba(29, 78, 216, 0.15), transparent 80%)`,
				}}
			/>
			<div className={styles.wrapper} ref={ref}>
				<div className={`${styles['lg:flex']}`}>
					<StickyHeader />
					<Sections />
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default App;
