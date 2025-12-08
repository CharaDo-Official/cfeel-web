import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
	title?: string;
	description?: string;
	url?: string;
	image?: string;
	type?: string;
	siteName?: string;
	twitterCard?: string;
}

export const SEO: React.FC<SEOProps> = ({
	title = 'CFEEL公式ホームページ',
	description = 'CFEELは皆様の生活をサポートするアプリケーションの開発を行っています。',
	url,
	image = 'https://lh3.googleusercontent.com/pw/AP1GczM00PoABDD794FqSNuSXcmHSw7jHWSFYHuEMnTbVPDblj53e8dMdlFXd2sigtWmY73Wj04BPbo72_XpD9pkUQfrIgRVxZVt8cNdkseoAqDO9OfigQ5Sv-7NV4SPJZDTqx9GhRT4ALrKqXGV_WSuD7s=w512-h512-s-no-gm?authuser=0',
	type = 'website',
	siteName = 'CFEEL公式ホームページ',
	twitterCard = 'summary',
}) => {
	useLocation(); // Force re-render on route change
	const fullTitle = title === 'CFEEL公式ホームページ' ? title : `${title} | CFEEL`;
	const currentUrl = url || window.location.href.split('?')[0].split('#')[0];

	return (
		<Helmet>
			{/* Basic */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={currentUrl} />

			{/* OGP */}
			<meta property="og:url" content={currentUrl} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:type" content={type} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:locale" content="ja_JP" />

			{/* Twitter */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
};
