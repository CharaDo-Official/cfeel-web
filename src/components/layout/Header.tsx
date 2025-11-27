import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '@/assets/cfeel_logo_header.png';
import { MAIN_NAVIGATION, SOCIAL_LINKS } from '@/constants/navigation';

// --- Style Constants ---
const STYLES = {
	// Desktop
	desktopLink: "relative py-2 text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
	activeLink: "text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary",
	inactiveLink: "text-slate-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
	dropdownPanel: "absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-lg border border-slate-100 bg-white p-2 shadow-xl opacity-0 invisible transform translate-y-2 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0",
	dropdownItem: "block rounded px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors whitespace-nowrap",
	
	// Mobile
	mobileMenuOverlay: "fixed inset-0 top-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out",
	hamburgerLine: "absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out",
	mobileLink: "text-lg font-medium text-slate-800 hover:text-primary",
	mobileAccordionBtn: "flex w-full items-center justify-between text-lg font-medium text-slate-800",
	mobileAccordionContent: "overflow-hidden transition-all duration-300",
	mobileSubLink: "text-base text-slate-500 hover:text-primary"
};

export const Header: React.FC = () => {
	const { pathname } = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	// Mobile Accordion States
	// Using a map to track open state of each menu item by label
	const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

	const [prevPathname, setPrevPathname] = useState(pathname);

	// Close menu on route change (State Derivation Pattern)
	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		setIsMenuOpen(false);
		setOpenAccordions({});
	}

	// Helpers
	const isCurrent = (path: string) => pathname.startsWith(path);
	const getLinkClass = (path: string) =>
		`${isCurrent(path) ? STYLES.activeLink : STYLES.inactiveLink} ${STYLES.desktopLink}`;

	const toggleAccordion = (label: string) => {
		setOpenAccordions(prev => ({
			...prev,
			[label]: !prev[label]
		}));
	};

	return (
		<header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
			<div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

				{/* --- Logo --- */}
				<Link to="/" className="flex items-center gap-2 z-50">
					<img src={logoImg} alt="CFEEL" className="h-8 w-auto" />
				</Link>

				{/* --- Desktop Navigation (PC) --- */}
				<nav className="hidden md:flex items-center gap-8">
					{MAIN_NAVIGATION.map((item) => (
						<div key={item.label} className="group relative">
							<Link to={item.path} className={getLinkClass(item.path)}>
								{item.label}
								{item.children && <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">▼</span>}
							</Link>
							
							{/* Dropdown Panel (Only if children exist) */}
							{item.children && (
								<div className={STYLES.dropdownPanel}>
									<div className="flex flex-col gap-1">
										{item.children.map((child) => (
											<Link
												key={child.label}
												to={child.path}
												className={STYLES.dropdownItem}
											>
												{child.label}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</nav>

				{/* --- Desktop Social --- */}
				<div className="hidden md:flex items-center gap-4">
					{/* Social Icons */}
					<div className="flex items-center gap-3">
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
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
									</svg>
								)}
							</a>
						))}
					</div>
				</div>

				{/* --- Mobile Hamburger Button --- */}
				<button
					className="md:hidden z-50 p-2 text-slate-600 focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<div className="relative w-6 h-5">
						<span className={`${STYLES.hamburgerLine} ${isMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`} />
						<span className={`${STYLES.hamburgerLine} ${isMenuOpen ? 'opacity-0' : 'top-2.5'}`} />
						<span className={`${STYLES.hamburgerLine} ${isMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'}`} />
					</div>
				</button>
			</div>

			{/* --- Mobile Navigation Menu (Overlay) --- */}
			<div
				className={`${STYLES.mobileMenuOverlay} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
				style={{ top: '80px', height: 'calc(100vh - 80px)' }}
			>
				<div className="flex flex-col h-full overflow-y-auto px-6 py-8 pb-20">
					<nav className="flex flex-col space-y-6">
						{MAIN_NAVIGATION.map((item) => (
							<div key={item.label}>
								{item.children ? (
									// Accordion Item
									<div>
										<button
											onClick={() => toggleAccordion(item.label)}
											className={STYLES.mobileAccordionBtn}
										>
											{item.label}
											<span className={`transform transition-transform duration-300 ${openAccordions[item.label] ? 'rotate-180' : ''}`}>
												▼
											</span>
										</button>
										<div className={`${STYLES.mobileAccordionContent} ${openAccordions[item.label] ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
											<div className="flex flex-col space-y-4 border-l-2 border-slate-100 pl-4 ml-1">
												{item.children.map((child) => (
													<Link
														key={child.label}
														to={child.path}
														className={STYLES.mobileSubLink}
													>
														{child.label}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									// Simple Link Item
									<Link to={item.path} className={STYLES.mobileLink}>
										{item.label}
									</Link>
								)}
							</div>
						))}

						<hr className="border-slate-100 my-4" />

						<div className="flex justify-center gap-8 py-4">
							{SOCIAL_LINKS.map((link) => (
								<a
									key={link.label}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-slate-400 hover:text-primary transition-colors"
								>
									{link.iconType === 'twitter' ? (
										<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									) : (
										<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
										</svg>
									)}
								</a>
							))}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};
