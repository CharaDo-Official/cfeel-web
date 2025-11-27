import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface DocumentLayoutProps {
	title: string;
	lastUpdated?: string;
	breadcrumbItems: { label: string; path?: string }[];
	children: React.ReactNode;
}

export const DocumentLayout: React.FC<DocumentLayoutProps> = ({
	title,
	lastUpdated,
	breadcrumbItems,
	children
}) => {
	return (
		<div className="min-h-screen bg-white pb-20">
			<Breadcrumb items={breadcrumbItems} />

			<section className="w-full px-4 py-8 md:px-8">
				<div className="mb-8">
					<h1 className="text-xl font-bold text-slate-900 mb-2">
						{title}
					</h1>
					{lastUpdated && (
						<p className="text-sm text-slate-500">
							最終更新日：{lastUpdated}
						</p>
					)}
				</div>

				<div className="w-full text-sm text-slate-700 leading-relaxed space-y-8">
					{children}
				</div>
			</section>
		</div>
	);
};

