import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SEO } from '@/components/seo/SEO';

// Change export name from AboutHome to Home to match the import in App.tsx
export const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 pb-20">
			<SEO 
				title="About Us"
				description="CFEELのパーパスと組織理念。「頭の中を整理する」を支えるプロダクトを創造します。"
			/>
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About Us' }]} />

			{/* Hero / Purpose */}
			<section className="bg-white py-20 lg:py-24 border-b border-slate-100">
				<div className="container mx-auto max-w-5xl px-6 text-center">
					<h1 className="mb-8 text-4xl font-bold tracking-tight text-primary md:text-5xl">
						About Us
					</h1>
					<div className="mx-auto max-w-3xl">
						<span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-blue-600">
							Product Philosophy
						</span>
						<h2 className="mb-8 text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
							私達が創造するモノで<br />
							「頭の中を整理する」を支える
						</h2>
					</div>
				</div>
			</section>

			{/* C+FEEL (Beliefs) */}
			<section className="py-20">
				<div className="container mx-auto max-w-6xl px-6">
					<div className="mb-16 text-center">
						<h2 className="text-3xl font-bold text-primary mb-4">パーパスを達成するための信念</h2>
						<p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 tracking-widest">
							C+FEEL
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Card 1: Challenging */}
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
							<h3 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
								<span className="text-rose-500 mr-2">Challenging FEEL</span>
								「新しいモノの創造」に挑戦する
							</h3>
							<p className="text-slate-600 leading-relaxed">
								私たちは、新たな価値を創造する挑戦者です。失敗を恐れずに、世の中と真摯に向き合い続け、「新しいモノの創造」に挑戦し続けていきます。
							</p>
						</div>

						{/* Card 2: Clarion */}
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
							<h3 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
								<span className="text-amber-500 mr-2">Clarion FEEL</span>
								「明快さ」を提供する
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Clarionとは中世時代にあった、高い音が出るトランペットのこと。その音色から、澄んだ様子や、明快で力強く響くさまを意味します。私たちは、誰もが納得するような明快なアイディアで、「頭の中の整理」を後押しします。
							</p>
						</div>

						{/* Card 3: Confidence */}
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
							<h3 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
								<span className="text-blue-500 mr-2">Confidence FEEL</span>
								「信頼できるモノ」を提供する
							</h3>
							<p className="text-slate-600 leading-relaxed">
								私たちは一切妥協をしません。明快なアイディアを、確かな知識と技術をもって具現化し、世の中に通用するモノを自信をもって提供します。
							</p>
						</div>

						{/* Card 4: Charming */}
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
							<h3 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
								<span className="text-emerald-500 mr-2">Charming FEEL</span>
								「選ばれるモノ」を提供する
							</h3>
							<p className="text-slate-600 leading-relaxed">
								あふれるプロダクトの中で、ただ有用であるだけでは人の心は動かせません。私たちは単に有用でなだけでなく、「楽しさ」や「面白さ」も追求し、人を惹きつける魅力を持ったプロダクトを提供します。
							</p>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
};
