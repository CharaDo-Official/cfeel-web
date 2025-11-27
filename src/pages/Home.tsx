import React from 'react';
import { Link } from 'react-router-dom';
// トップページにパンくずリストは一般的に不要ですが、もし置くならここに配置
// import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const Home: React.FC = () => {
	return (
		<div className="min-h-screen w-full bg-slate-50 selection:bg-primary selection:text-white">
			
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
				<div className="container mx-auto max-w-6xl px-6 text-center">

					{/* Main Copy */}
					<h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-primary md:text-7xl">
						Simplify your day,<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">
							Clarify your mind.
						</span>
					</h1>

					<p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 leading-relaxed">
						私たちは、日々のノイズを取り除くデスクトップアプリケーションを開発しています。<br className="hidden md:inline" />
						思考を整理し、本当に大切なことに集中するためのツールを。
					</p>

					{/* Buttons */}
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
						<Link
							to="/charado"
							className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl"
						>
							See Products
						</Link>
						<Link
							to="/about"
							className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-700 transition-all hover:border-primary hover:text-primary hover:-translate-y-1"
						>
							Learn More
						</Link>
					</div>

					{/* UI Mockup (CSS Art with Tailwind) */}
					<div className="relative mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/50">
						{/* Browser/Window Header */}
						<div className="mb-2 flex h-8 items-center gap-2 rounded-t-lg bg-slate-50 px-4 border-b border-slate-100">
							<div className="h-3 w-3 rounded-full bg-rose-400"></div>
							<div className="h-3 w-3 rounded-full bg-amber-400"></div>
							<div className="h-3 w-3 rounded-full bg-emerald-400"></div>
						</div>
						{/* Content Body */}
						<div className="flex h-64 w-full overflow-hidden rounded-lg bg-slate-100 md:h-96">
							{/* Sidebar */}
							<div className="hidden w-1/4 border-r border-slate-200 bg-white p-4 md:block">
								<div className="mb-4 h-4 w-1/2 rounded bg-slate-200"></div>
								<div className="space-y-3">
									<div className="h-3 w-3/4 rounded bg-slate-100"></div>
									<div className="h-3 w-full rounded bg-slate-100"></div>
									<div className="h-3 w-5/6 rounded bg-slate-100"></div>
								</div>
							</div>
							{/* Main Area */}
							<div className="flex-1 p-6">
								<div className="mb-6 flex items-center justify-between">
									<div className="h-8 w-1/3 rounded bg-white shadow-sm"></div>
									<div className="h-8 w-8 rounded-full bg-white shadow-sm"></div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div className="aspect-video rounded bg-white shadow-sm"></div>
									<div className="aspect-video rounded bg-white shadow-sm"></div>
									<div className="aspect-video rounded bg-white shadow-sm"></div>
								</div>
							</div>
						</div>
					</div>

				</div>

				{/* Background Decoration (Optional Blur) */}
				<div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 opacity-50 blur-3xl filter"></div>
			</section>
		</div>
	);
};