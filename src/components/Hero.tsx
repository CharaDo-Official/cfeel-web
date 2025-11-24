import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
	return (
		<section className="hero">
			<div className="container hero-content">
				<h1 className="hero-title">頭の中を、スッキリと。</h1>
				<p className="hero-description">
					CFEELは皆様の生活をサポートするアプリケーションの開発を行っています。
				</p>
				<div className="hero-buttons">
					<Link to="/downloads" className="btn-primary large">Download Apps</Link>
					<Link to="/about" className="btn-secondary large">Learn More</Link>
				</div>
			</div>

			<div className="hero-image-wrapper">
				<div className="dummy-ui">
					<div className="ui-header">
						<span className="dot red"></span>
						<span className="dot yellow"></span>
						<span className="dot green"></span>
					</div>
					<div className="ui-body">
						<div className="ui-sidebar"></div>
						<div className="ui-main"></div>
					</div>
				</div>
			</div>
		</section>
	);
};