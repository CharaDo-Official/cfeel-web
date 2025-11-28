import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/cfeel_logo_header.png';
import { MAIN_NAVIGATION, SOCIAL_LINKS } from '@/constants/navigation';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-600">
			<div className="container mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Brand Column */}
					<div className="col-span-1 md:col-span-1">
						<Link to="/" className="inline-block mb-6">
							<img src={logoImg} alt="CFEEL" className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity" />
						</Link>
						<p className="text-sm leading-relaxed text-slate-500 mb-6">
							思考を整理し、本当に大切なことに集中するためのツールを開発しています。
						</p>
						<div className="flex gap-4">
							{/* SNS Icons */}
							{SOCIAL_LINKS.map((link) => (
								<a 
									key={link.label}
									href={link.url} 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-slate-400 hover:text-primary transition-colors" 
									aria-label={link.label}
								>
									{link.iconType === 'twitter' ? (
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									) : (
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
										</svg>
									)}
								</a>
							))}
						</div>
					</div>

					{/* Link Sections */}
					{MAIN_NAVIGATION.map((section) => (
						<div key={section.label}>
							<h3 className="font-bold text-slate-900 mb-4">{section.label}</h3>
							<ul className="space-y-3 text-sm">
								{section.children ? (
									section.children.map((link) => (
										<li key={link.label}>
											<Link to={link.path} className="hover:text-primary transition-colors">
												{link.label}
											</Link>
										</li>
									))
								) : (
									<li key={section.label}>
										<Link to={section.path} className="hover:text-primary transition-colors">
											{section.label}
										</Link>
									</li>
								)}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-xs text-slate-400">
						&copy; {currentYear} CFEEL. All rights reserved.
					</p>
					<p className="text-xs text-slate-400">
						Made by CFEEL
					</p>
				</div>
			</div>
		</footer>
	);
};
