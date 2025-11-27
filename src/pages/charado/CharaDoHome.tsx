import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DesktopMascot } from '@/components/ui/DesktopMascot';

export const CharaDoHome: React.FC = () => {
	return (
		<div className="min-h-screen bg-white pb-20 font-sans text-slate-800">
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo' }]} />
			<DesktopMascot />

			{/* Hero Section - Simple & Clean */}
			<section className="pt-20 pb-32 md:pt-32 md:pb-40 px-6">
				<div className="container mx-auto max-w-5xl text-center">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
						タスク管理は<br className="md:hidden" />
						<span className="text-primary">大好きなキャラ</span>と一緒に。
					</h1>
					
					<p className="text-xl text-slate-400 font-bold mb-12 tracking-wide">
						（or 大切な人と一緒に！）
					</p>

					<p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-medium">
						アシスタントがタスクを提案してくれる<br />
						新感覚デスクトップマスコット
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-5">
						<button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition-colors shadow-lg">
							Download Now
						</button>
						<Link to="/charado/plan" className="px-10 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors">
							View Plans
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section - Clean Alternating Layout */}
			<section className="py-20 bg-slate-50/50">
				<div className="container mx-auto px-6 max-w-6xl">
					<div className="text-center mb-24">
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
						<p className="text-slate-500">モチベーションを維持する3つのコア機能</p>
					</div>

					<div className="space-y-32">
						{/* Feature 01 */}
						<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
							<div className="w-full md:w-1/2 flex justify-center">
								<div className="w-64 h-64 bg-blue-50 rounded-[2.5rem] flex items-center justify-center text-8xl text-blue-500">
									📅
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<span className="text-blue-500 font-bold tracking-wider text-sm mb-2 block">01. TASK MANAGEMENT</span>
								<h3 className="text-3xl font-bold text-slate-900 mb-6">
									やるべきタスクを<br/>アプリが提案
								</h3>
								<p className="text-slate-600 leading-loose text-lg">
									CharaDoでは、登録されたタスクを重要度と緊急度の2つの要素から管理します。やるべきタスクをちょうどいいときに提案するので、後回しになりがちなタスクも効率的に進めることができます。
								</p>
							</div>
						</div>

						{/* Feature 02 */}
						<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
							<div className="w-full md:w-1/2 flex justify-center">
								<div className="w-64 h-64 bg-amber-50 rounded-[2.5rem] flex items-center justify-center text-8xl text-amber-500">
									👤
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<span className="text-amber-500 font-bold tracking-wider text-sm mb-2 block">02. YOUR PARTNER</span>
								<h3 className="text-3xl font-bold text-slate-900 mb-6">
									アシスタントが<br/>あなたをサポート
								</h3>
								<p className="text-slate-600 leading-loose text-lg mb-8">
									CharaDoではあなたのアシスタントとして、猫耳の少女「紬（つむぎ）」と黒猫の「ノア」があなたのタスク管理をサポートしてくれます。
								</p>
								<Link to="/charado/character" className="inline-flex items-center font-bold text-amber-600 hover:text-amber-700 group">
									<span className="border-b-2 border-amber-200 group-hover:border-amber-500 transition-colors">キャラクターを見る</span>
									<svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
							</div>
						</div>

						{/* Feature 03 */}
						<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
							<div className="w-full md:w-1/2 flex justify-center">
								<div className="w-64 h-64 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center text-8xl text-emerald-500">
									🖥️
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<span className="text-emerald-500 font-bold tracking-wider text-sm mb-2 block">03. DESKTOP WIDGET</span>
								<h3 className="text-3xl font-bold text-slate-900 mb-6">
									アプリを開かなくても<br/>いつでも確認できる
								</h3>
								<p className="text-slate-600 leading-loose text-lg">
									アシスタントと一緒にタスクリストが常にデスクトップにいるので、タスクリストを見落とすこともありません。もちろん、忙しいときにはアシスタントに席を外してもらうこともできます。
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section - Simple */}
			<section className="py-32 px-6">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
						Ready to focus?
					</h2>
					<p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
						今すぐダウンロードして、<br className="md:hidden" />理想のタスク管理体験を始めましょう。
					</p>
					<button className="px-12 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-xl hover:bg-blue-600 hover:-translate-y-1 transition-all">
						Get Started
					</button>
				</div>
			</section>
		</div>
	);
};
