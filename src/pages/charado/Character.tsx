import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SEO } from '@/components/seo/SEO';

// 動画ファイルを動的にインポート（ファイルが存在しない場合にエラーにならないようにする）
const videoModules = import.meta.glob('../../assets/characters/tumugi/*.webm', { eager: true }) as Record<string, { default: string }>;

const getVideoSrc = (filename: string) => {
	const key = `../../assets/characters/tumugi/${filename}`;
	return videoModules[key]?.default || undefined;
};

// 動画タイプの定義を拡張
type VideoType = 'normal'| 'add' | 'complete' | 'entry' | 'exit' | 'touch' ;

interface CharacterData {
	id: string;
	name: string;
	reading: string;
	englishName: string;
	role: string;
	description: string[];
	creator: {
		name: string;
		twitter: string;
	};
	themeColor: string;
	bgColor: string;
	borderColor: string;
	videos?: {
		[key in VideoType]?: string;
	};
	hasVideo: boolean;
}

const characters: CharacterData[] = [
	{
		id: 'tsumugi',
		name: '紬',
		reading: 'つむぎ',
		englishName: 'Tsumugi',
		role: 'あなたのタスク管理をサポートする、猫耳の少女。',
		description: [
			'日々のタスクと人を、紡いでいってほしいという願いから「つむぎ」と名付けられた。',
			'ユーザーの皆様が大切な予定を忘れることがないよう、日々のタスク管理をサポートしてくれます。'
		],
		creator: {
			name: '破戒いむ',
			twitter: 'https://x.com/imuo13?s=20'
		},
		themeColor: 'text-amber-500',
		bgColor: 'bg-amber-50',
		borderColor: 'border-amber-200',
		videos: {
			touch: getVideoSrc('タッチ時.webm'),
			add: getVideoSrc('追加時.webm'),
			complete: getVideoSrc('達成時.webm'),
			normal: getVideoSrc('通常時.webm'),
			// 登場・退場は素材があればここに追加
		},
		hasVideo: true
	},
	{
		id: 'noir',
		name: 'ノア',
		reading: 'Noir',
		englishName: 'Noir',
		role: 'あなたのタスク管理を見守る、気ままな黒猫。',
		description: [
			'普段はけだるげだが、ニンゲンがタスクを終わらせてゆっくり休めるよう、実は陰からじっと見守っている。',
			'タスクが完了すると、満足そうに喉を鳴らすらしい。'
		],
		creator: {
			name: '破戒いむ',
			twitter: 'https://x.com/imuo13?s=20'
		},
		themeColor: 'text-indigo-600',
		bgColor: 'bg-slate-50',
		borderColor: 'border-slate-200',
		hasVideo: false // ノアもボタンを表示したい場合はここを true にして、videos に undefined を渡すロジックに修正する
	}
];

const VIDEO_LABELS: Record<VideoType, string> = {
	normal: '通常',
	entry: '登場',
	exit: '退場',
	add: '追加',
	complete: '達成',
	touch: 'タッチ',
};

// ボタンの表示順序を定義
const VIDEO_ORDER: VideoType[] = ['normal', 'add', 'complete', 'entry', 'exit', 'touch'];

const CharacterSection: React.FC<{ char: CharacterData; index: number }> = ({ char, index }) => {
	const [currentVideoKey, setCurrentVideoKey] = useState<VideoType>('normal');

	const currentVideoSrc = char.videos ? char.videos[currentVideoKey] : null;

	return (
		<div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
			{/* Visual Area */}
			<div className="w-full lg:w-1/2 flex flex-col items-center relative group">
				{/* Decorative Background Blob/Shape */}
				<div className={`absolute inset-0 rounded-full opacity-20 blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-700 ${char.id === 'tsumugi' ? 'bg-amber-300' : 'bg-indigo-300'}`} />

				{/* Video/Image Container with Copy Protection */}
				<div 
					className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center mb-6 select-none"
					onContextMenu={(e) => e.preventDefault()} // Disable right-click
				>
					{/* Transparent overlay to prevent direct interaction/drag */}
					<div className="absolute inset-0 z-20 bg-transparent" />
					
					{currentVideoSrc ? (
						<video
							key={currentVideoSrc} // Key forces reload on change
							src={currentVideoSrc}
							autoPlay
							loop
							muted
							playsInline
							draggable={false} // Disable drag
							className="w-full h-full object-contain drop-shadow-2xl pointer-events-none" // Disable pointer events on video
						/>
					) : (
						<div 
							className="w-full h-full rounded-3xl border-4 border-dashed border-slate-200 flex items-center justify-center bg-slate-50/50 pointer-events-none select-none"
							draggable={false}
						>
							<div className="text-center p-8">
								<p className="text-slate-400 font-bold text-xl mb-2">NO IMAGE</p>
								<p className="text-slate-400 text-sm">Coming Soon...</p>
							</div>
						</div>
					)}
				</div>

				{/* Video Controls (Always show buttons for all defined types to indicate features) */}
				<div className="relative z-20 flex flex-wrap justify-center gap-3 max-w-md">
					{VIDEO_ORDER.map((type) => {
						const hasVideoForType = char.videos && char.videos[type];
						const isSelected = currentVideoKey === type;
						
						return (
							<button
								key={type}
								onClick={() => setCurrentVideoKey(type)}
								disabled={!hasVideoForType} // Disable if no video exists for this type
								className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-sm
									${isSelected
										? `${char.bgColor} ${char.themeColor} ring-2 ring-offset-2 ${char.borderColor.replace('border', 'ring')}`
										: hasVideoForType 
											? 'bg-white text-slate-500 hover:bg-slate-50'
											: 'bg-slate-100 text-slate-300 cursor-not-allowed' // Disabled style
									}`}
							>
								{VIDEO_LABELS[type]}
							</button>
						);
					})}
				</div>
			</div>

			{/* Content Area */}
			<div className="w-full lg:w-1/2 text-left">
				<div className="relative">
					{/* Watermark Name */}
					<span className="absolute -top-12 -left-4 text-8xl md:text-9xl font-black text-slate-100 -z-10 select-none uppercase opacity-80">
						{char.englishName}
					</span>

					<div className="space-y-2 mb-6">
						<span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${char.borderColor} ${char.bgColor} ${char.themeColor}`}>
							PARTNER {String(index + 1).padStart(2, '0')}
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-slate-800">
							{char.name}
							{char.reading && <span className="text-lg md:text-xl font-medium text-slate-400 ml-3">{char.reading}</span>}
						</h2>
						<p className={`text-lg font-medium ${char.themeColor}`}>
							{char.role}
						</p>
					</div>

					<div className="space-y-6 mb-8">
						{char.description.map((desc, i) => (
							<p key={i} className="text-slate-600 leading-loose text-sm md:text-base">
							{desc}
							</p>
						))}
					</div>

					<div className="border-t border-slate-100 pt-6">
						<div className="flex items-center gap-2 text-sm text-slate-500">
							<span>Designed by</span>
							<a
								href={char.creator.twitter}
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold hover:text-[#1DA1F2] transition-colors flex items-center gap-1"
							>
								{char.creator.name}
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Character: React.FC = () => {
	return (
		<div className="min-h-screen bg-white pb-20 overflow-x-hidden">
			<SEO 
				title="キャラクター"
				description="CharaDoのキャラクター、紬とノアの紹介ページです。あなたのタスク管理を支えるパートナーたち。"
			/>
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: 'Character' }]} />

			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="text-center mb-20">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
						CHARACTERS
					</h1>
					<p className="text-slate-500 text-lg">
						あなたのタスク管理を支えるパートナー
					</p>
				</div>

				<div className="space-y-32">
					{characters.map((char, index) => (
						<CharacterSection key={char.id} char={char} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
