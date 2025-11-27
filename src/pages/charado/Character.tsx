import React from 'react';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

// データ定義（省略なし）
const characters = [
	{
		id: '01', name: 'Lumina', type: 'Supportive / Cheerful',
		description: 'あなたの頑張りを肯定し、優しく背中を押してくれるパートナー。',
		quote: "「その調子！一歩ずつ進んでいきましょう。」", color: '#F59E0B'
	},
	{
		id: '02', name: 'Raven', type: 'Cool / Calm',
		description: '感情に流されず、淡々とタスク管理をサポートする参謀タイプ。',
		quote: "「予定通りです。次のタスクへ移行してください。」", color: '#3B82F6'
	},
	{
		id: '03', name: 'Momo', type: 'Relaxed / Healing',
		description: '焦りは禁物。マイペースに、でも確実に進みたいあなたへ。',
		quote: "「ちょっと休憩しない？お茶でも飲んでさ。」", color: '#10B981'
	}
];

export const Character: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 pb-20">
			<Header />
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: 'Character' }]} />

			{/* Page Title */}
			<section className="py-16 text-center">
				<div className="container mx-auto px-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Partners</h1>
					<p className="text-slate-500">性格も、言葉遣いも、あなた好みに。<br className="hidden md:inline" />共に歩むパートナーを選びましょう。</p>
				</div>
			</section>

			{/* Grid */}
			<section className="container mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{characters.map((char) => (
						<div
							key={char.id}
							className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							{/* Avatar Placeholder */}
							<div
								className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 bg-slate-50 text-4xl font-bold transition-transform group-hover:scale-105"
								style={{ borderColor: char.color, color: char.color }}
							>
								{char.name[0]}
							</div>

							{/* Text Info */}
							<span className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
								{char.type}
							</span>
							<h2 className="mb-4 text-2xl font-bold text-primary">{char.name}</h2>
							<blockquote className="mb-6 border-l-2 border-slate-200 pl-4 text-sm italic text-slate-600">
								{char.quote}
							</blockquote>
							<p className="text-sm leading-relaxed text-slate-500">
								{char.description}
							</p>

							{/* Decorative background accent */}
							<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
						</div>
					))}
				</div>
			</section>

			{/* Customization Section */}
			<section className="container mx-auto mt-20 max-w-7xl px-6">
				<div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-100 md:flex">
					<div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
						<h2 className="mb-6 text-3xl font-bold text-primary">Full Customization</h2>
						<p className="mb-8 text-slate-500 leading-loose">
							プリセットキャラクターだけではありません。<br />
							Live2Dモデルのインポートや、セリフの編集機能により、<br />
							あなただけの「推し」を再現することが可能です。
						</p>
						<div>
							<a href="#" className="inline-block rounded-lg border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white">
								仕様について問い合わせる
							</a>
						</div>
					</div>
					<div className="flex-1 bg-slate-100 min-h-[300px] flex items-center justify-center text-slate-300 font-mono text-lg">
						UI Mockup Area
					</div>
				</div>
			</section>

		</div>
	);
};