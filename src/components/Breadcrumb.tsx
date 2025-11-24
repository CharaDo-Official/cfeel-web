import React from 'react';
import { Link } from 'react-router-dom';

// 型定義
interface BreadcrumbItem {
	label: string;
	path?: string; // pathがない場合は現在のページ（リンクなし）
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<nav className="breadcrumb" aria-label="Breadcrumb">
			<div className="container">
				<ol className="breadcrumb-list">
					{items.map((item, index) => {
						const isLast = index === items.length - 1;

						return (
							<li
								key={index}
								className={`breadcrumb-item ${isLast ? 'active' : ''}`}
								aria-current={isLast ? 'page' : undefined}
							>
								{/* 最後の項目、またはパスがない場合はテキストのみ */}
								{isLast || !item.path ? (
									item.label
								) : (
									<Link to={item.path}>{item.label}</Link>
								)}
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
};