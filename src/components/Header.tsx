import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="container header-inner">
				{/* ロゴ: publicフォルダに画像を置いた想定 */}
				<Link to="/" className="logo">
					<img src="/cfeel_logo_header.png" alt="CFEEL" />
				</Link>

				{/* ハンバーガーメニュー用のチェックボックスロジックはそのまま維持 */}
				<input type="checkbox" id="menu-toggle" className="menu-checkbox" />

				<label htmlFor="menu-toggle" className="menu-icon">
					<span className="nav-icon"></span>
				</label>

				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item has-dropdown">
							<Link to="/charado" className="nav-link">CharaDo</Link>
							<ul className="dropdown-menu">
								<li><Link to="/charado" className="dropdown-link">Home</Link></li>
								<li><Link to="/charado/character" className="dropdown-link">Character</Link></li>
								<li><Link to="/charado/plan" className="dropdown-link">Plan</Link></li>
								<li><Link to="/charado/policy" className="dropdown-link">Policy</Link></li>
								<li><Link to="/charado/help" className="dropdown-link">Help</Link></li>
							</ul>
						</li>

						<li className="nav-item has-dropdown">
							<span className="nav-link">About Us</span>
							<ul className="dropdown-menu">
								<li><Link to="/about" className="dropdown-link">Home</Link></li>
								<li><Link to="/about/mission" className="dropdown-link">経営理念</Link></li>
								<li><Link to="/about/product-philosophy" className="dropdown-link">製品理念</Link></li>
								<li><Link to="/about/policy" className="dropdown-link">Policy</Link></li>
							</ul>
						</li>

						<li className="nav-item">
							<Link to="/support" className="nav-link">Support</Link>
						</li>

						<li className="nav-item mobile-cta">
							<Link to="/contact" className="btn-primary">Contact</Link>
						</li>
					</ul>
				</nav>

				<Link to="/contact" className="btn-primary desktop-cta">Contact</Link>
			</div>
		</header>
	);
};