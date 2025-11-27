import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const Plan: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 pb-20">
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: 'Plan' }]} />

			<section className="container mx-auto max-w-4xl px-6 py-16">
				<div className="text-center mb-16">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Smart Plan</h1>
					<p className="text-slate-500 text-lg">
						無理のない計画作りをサポートする、<br />
						AI活用型のタスクスケジューリング機能について。
					</p>
				</div>

				<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
					<h2 className="text-2xl font-bold text-primary mb-4">Coming Soon</h2>
					<p className="text-slate-600 leading-relaxed">
						現在、この機能の詳細ページは準備中です。<br />
						CharaDoのプランニング機能は、あなたの作業ペースや好みの時間を学習し、
						最適なスケジュールを提案することで「何をすべきか迷う時間」を削減します。
					</p>
				</div>
			</section>
		</div>
	);
};

