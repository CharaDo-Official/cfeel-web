import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '@/assets/cfeel_logo_header.png';
import { MAIN_NAVIGATION, CONTACT_LINK } from '@/constants/navigation';

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

				{/* --- Desktop CTA Button --- */}
				<div className="hidden md:block">
					<Link
						to={CONTACT_LINK.path}
						className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow hover:-translate-y-0.5"
					>
						{CONTACT_LINK.label}
					</Link>
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

						<Link
							to={CONTACT_LINK.path}
							className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-base font-bold text-white shadow-md active:scale-95 transition-transform"
						>
							{CONTACT_LINK.label} Us
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};
