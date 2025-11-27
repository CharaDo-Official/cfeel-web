import React, { useState, useEffect } from 'react';
import tsumugiNormal from '@/assets/characters/tumugi/通常時.webm';
import tsumugiTouch from '@/assets/characters/tumugi/タッチ時.webm';

export const DesktopMascot: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isTouching, setIsTouching] = useState(false);
	const [hasEntered, setHasEntered] = useState(false);
	
	// Initialize entry animation after mount
	useEffect(() => {
		// Small delay to ensure smooth entry animation after page load
		const timer = setTimeout(() => {
			setHasEntered(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	const handleTouch = () => {
		if (isTouching) return;
		setIsTouching(true);
		
		// Reset to normal video after the touch video duration (approximate)
		setTimeout(() => {
			setIsTouching(false);
		}, 4000);
	};

	// Calculate position classes
	const positionClass = (hasEntered && isVisible) ? 'translate-x-0' : 'translate-x-[120%]';

	return (
		<>
			{/* Mascot Container */}
			<div 
				className={`fixed bottom-0 right-4 z-50 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${positionClass}`}
				style={{ width: '300px', height: '400px', pointerEvents: 'none' }}
			>
				<div 
					className="w-full h-full relative cursor-pointer pointer-events-auto select-none"
					onClick={handleTouch}
					onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
					role="button"
					aria-label="Interact with mascot"
				>
					{/* Transparent Overlay for extra protection against dragging/saving */}
					<div className="absolute inset-0 z-10 bg-transparent" draggable={false} />

					{/* Normal Video */}
					<video
						src={tsumugiNormal}
						autoPlay
						loop
						muted
						playsInline
						className={`absolute bottom-0 right-0 max-h-full max-w-full object-contain drop-shadow-xl transition-opacity duration-300 ${isTouching ? 'opacity-0' : 'opacity-100'} pointer-events-none`}
						draggable={false}
					/>
					
					{/* Touch Reaction Video */}
					<video
						key={isTouching ? 'playing' : 'stopped'}
						src={tsumugiTouch}
						autoPlay={isTouching}
						loop={false}
						muted
						playsInline
						className={`absolute bottom-0 right-0 max-h-full max-w-full object-contain drop-shadow-xl transition-opacity duration-300 ${isTouching ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
						draggable={false}
					/>
				</div>
			</div>

			{/* Side Toggle Button */}
			<button
				onClick={() => setIsVisible(!isVisible)}
				className={`fixed bottom-20 right-0 z-[60] h-16 shadow-md transition-all duration-300 flex items-center justify-center
					${isVisible 
						? 'bg-rose-500 text-white hover:bg-rose-600 w-12 hover:w-14 rounded-l-xl' 
						: 'bg-slate-200 text-slate-500 hover:bg-slate-300 w-12 hover:w-14 rounded-l-xl'
					}`}
				aria-label={isVisible ? "Hide mascot" : "Show mascot"}
			>
				{isVisible ? (
					// Hide Icon (Arrow Right)
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
					</svg>
				) : (
					// Show Icon (Arrow Left)
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
					</svg>
				)}
			</button>
		</>
	);
};
