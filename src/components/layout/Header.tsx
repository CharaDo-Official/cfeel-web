import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import logoImg from '@/assets/cfeel_logo_header.png';

export const Header: React.FC = () => {
const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCharaDoOpen, setIsMobileCharaDoOpen] = useState(false);
  
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
    setIsMobileCharaDoOpen(false);
  }

  // 現在地のリンク判定ヘルパー
  const isCurrent = (path: string) => pathname.startsWith(path);
	// 共通クラス
	const desktopLinkClass = "relative py-2 text-sm font-medium transition-colors hover:text-primary";
	const activeClass = "text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary";
	const inactiveClass = "text-slate-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

	return (
		<header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
			<div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

				{/* --- Logo --- */}
				<Link to="/" className="flex items-center gap-2 z-50">
					<img src={logoImg} alt="CFEEL" className="h-8 w-auto" />
				</Link>

				{/* --- Desktop Navigation (PC) --- */}
				<nav className="hidden md:flex items-center gap-8">
					{/* CharaDo Dropdown */}
					<div className="group relative">
						<Link
							to="/charado"
							className={`${isCurrent('/charado') ? activeClass : inactiveClass} ${desktopLinkClass}`}
						>
							CharaDo
						</Link>
						{/* Dropdown Panel */}
						<div className="absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 rounded-lg border border-slate-100 bg-white p-2 shadow-xl opacity-0 invisible transform translate-y-2 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
							<div className="flex flex-col gap-1">
								{['Home', 'Character', 'Plan', 'Policy'].map((item) => (
									<Link
										key={item}
										to={`/charado/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
										className="block rounded px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
									>
										{item}
									</Link>
								))}
							</div>
						</div>
					</div>

					<Link to="/about" className={`${isCurrent('/about') ? activeClass : inactiveClass} ${desktopLinkClass}`}>
						About Us
					</Link>
					<Link to="/support" className={`${isCurrent('/support') ? activeClass : inactiveClass} ${desktopLinkClass}`}>
						Support
					</Link>
				</nav>

				{/* --- Desktop CTA Button --- */}
				<div className="hidden md:block">
					<Link
						to="/contact"
						className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow hover:-translate-y-0.5"
					>
						Contact
					</Link>
				</div>

				{/* --- Mobile Hamburger Button --- */}
				<button
					className="md:hidden z-50 p-2 text-slate-600 focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<div className="relative w-6 h-5">
						<span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`} />
						<span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-2.5'}`} />
						<span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'}`} />
					</div>
				</button>
			</div>

			{/* --- Mobile Navigation Menu (Overlay) --- */}
			<div
				className={`fixed inset-0 top-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				style={{ top: '80px', height: 'calc(100vh - 80px)' }}
			>
				<div className="flex flex-col h-full overflow-y-auto px-6 py-8 pb-20">
					<nav className="flex flex-col space-y-6">

						{/* Mobile: CharaDo (Accordion) */}
						<div>
							<button
								onClick={() => setIsMobileCharaDoOpen(!isMobileCharaDoOpen)}
								className="flex w-full items-center justify-between text-lg font-medium text-slate-800"
							>
								CharaDo
								<span className={`transform transition-transform duration-300 ${isMobileCharaDoOpen ? 'rotate-180' : ''}`}>
									▼
								</span>
							</button>

							{/* Accordion Content */}
							<div className={`overflow-hidden transition-all duration-300 ${isMobileCharaDoOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
								<div className="flex flex-col space-y-4 border-l-2 border-slate-100 pl-4 ml-1">
									{['Home', 'Character', 'Plan', 'Policy'].map((item) => (
										<Link
											key={item}
											to={`/charado/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
											className="text-base text-slate-500 hover:text-primary"
										>
											{item}
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link to="/about" className="text-lg font-medium text-slate-800 hover:text-primary">
							About Us
						</Link>

						<Link to="/support" className="text-lg font-medium text-slate-800 hover:text-primary">
							Support
						</Link>

						<hr className="border-slate-100 my-4" />

						<Link
							to="/contact"
							className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-base font-bold text-white shadow-md active:scale-95 transition-transform"
						>
							Contact Us
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};