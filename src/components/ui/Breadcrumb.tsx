import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
	items: { label: string; path?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<nav className="w-full bg-slate-50 pt-24 pb-4 border-b border-slate-100">
			<div className="container mx-auto max-w-7xl px-6">
				<ol className="flex items-center space-x-2 text-sm text-slate-500">
					{items.map((item, index) => {
						const isLast = index === items.length - 1;
						return (
							<li key={index} className="flex items-center">
								{index > 0 && <span className="mx-2 text-slate-300">/</span>}
								{isLast || !item.path ? (
									<span className="font-medium text-primary">{item.label}</span>
								) : (
									<Link to={item.path} className="hover:text-primary hover:underline underline-offset-4 decoration-slate-300">
										{item.label}
									</Link>
								)}
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
};