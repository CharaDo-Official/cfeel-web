import React from 'react';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Hero } from '@/components/Hero';

export const TopPage: React.FC = () => {
	return (
		<>
			<Header />
			{/* トップページなのでパンくずはHomeのみ */}
			<Breadcrumb items={[{ label: 'Home' }]} />
			<Hero />
		</>
	);
};