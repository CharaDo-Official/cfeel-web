import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const CharaDoHome: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 pb-20">
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo' }]} />

			{/* Product Hero */}
			<section className="relative overflow-hidden bg-white py-20 lg:py-28">
				<div className="container mx-auto max-w-5xl px-6 text-center">
					<span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
						Productivity App
					</span>
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-6xl">
						CharaDo
					</h1>
					<p className="mx-auto mb-10 max-w-2xl text-lg text-slate-500">
						推しと共に、日々を整える。<br />
						キャラクター特化型タスク管理アプリケーション。
					</p>

					<div className="flex justify-center gap-4">
						<button className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-slate-800">
							Download Now
						</button>
						<Link to="/contact" className="rounded-lg px-8 py-3 font-semibold text-slate-600 hover:text-primary">
							Contact Sales
						</Link>
					</div>
				</div>

				{/* Decorative Gradient Line at bottom */}
				<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
			</section>

			{/* Features Grid */}
			<section className="container mx-auto mt-16 max-w-7xl px-6">
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-bold text-primary">Key Features</h2>
					<p className="mt-2 text-slate-500">モチベーションを維持する3つのコア機能</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

					{/* Feature 1: Character */}
					<div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
							👤
						</div>
						<h3 className="mb-3 text-xl font-bold text-primary">Character</h3>
						<p className="mb-6 text-sm leading-relaxed text-slate-500">
							あなただけのパートナーを設定しましょう。タスクを完了するたびに、彼らがあなたを褒めてくれます。
						</p>
						<Link to="/charado/character" className="inline-flex items-center text-sm font-semibold text-primary decoration-slate-300 underline-offset-4 hover:underline">
							View Characters <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
						</Link>
					</div>

					{/* Feature 2: Plan */}
					<div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
							📅
						</div>
						<h3 className="mb-3 text-xl font-bold text-primary">Smart Plan</h3>
						<p className="mb-6 text-sm leading-relaxed text-slate-500">
							無理のない計画をAIが提案。「今日はここまで」を明確にし、心の負担を減らします。
						</p>
						<Link to="/charado/plan" className="inline-flex items-center text-sm font-semibold text-primary decoration-slate-300 underline-offset-4 hover:underline">
							About Planning <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
						</Link>
					</div>

					{/* Feature 3: Policy */}
					<div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
							🛡️
						</div>
						<h3 className="mb-3 text-xl font-bold text-primary">Privacy First</h3>
						<p className="mb-6 text-sm leading-relaxed text-slate-500">
							あなたのデータは安全に保護されます。ローカル保存を基本としたセキュアな設計です。
						</p>
						<Link to="/charado/policy" className="inline-flex items-center text-sm font-semibold text-primary decoration-slate-300 underline-offset-4 hover:underline">
							Read Policy <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
						</Link>
					</div>

				</div>
			</section>

			{/* Bottom CTA */}
			<section className="container mx-auto mt-20 max-w-5xl px-6">
				<div className="overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-white shadow-2xl md:px-12">
					<h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to focus?</h2>
					<p className="mx-auto mb-10 max-w-xl text-slate-300">
						今すぐダウンロードして、理想のタスク管理体験を始めましょう。<br />
						あなたの生活を変えるパートナーが待っています。
					</p>
					<button className="rounded-full bg-white px-8 py-3 font-bold text-primary hover:bg-slate-100 transition-colors">
						Get Started for Free
					</button>
				</div>
			</section>
		</div>
	);
};