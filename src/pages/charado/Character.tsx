import React from 'react';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Link } from 'react-router-dom';

// キャラクターデータの型定義
interface Character {
	id: string;
	name: string;
	type: string;
	description: string;
	quote: string;
	color: string; // キャラクターのテーマカラー
}

// キャラクターデータ（本来はAPIや別ファイルから取得するが、ここでは定義）
const characters: Character[] = [
	{
		id: '01',
		name: 'Lumina',
		type: 'Supportive / Cheerful',
		description: 'あなたの頑張りを肯定し、優しく背中を押してくれるパートナー。日々の小さな達成を一緒に喜んでくれます。',
		quote: "「その調子！一歩ずつ進んでいきましょう。」",
		color: '#F59E0B' // Yellow
	},
	{
		id: '02',
		name: 'Raven',
		type: 'Cool / Calm',
		description: '感情に流されず、淡々とタスク管理をサポートする参謀タイプ。無駄を省き、効率的な進行を助言します。',
		quote: "「予定通りです。次のタスクへ移行してください。」",
		color: '#3B82F6' // Blue
	},
	{
		id: '03',
		name: 'Momo',
		type: 'Relaxed / Healing',
		description: '焦りは禁物。マイペースに、でも確実に進みたいあなたへ。疲れた時に適切な休憩を提案してくれます。',
		quote: "「ちょっと休憩しない？お茶でも飲んでさ。」",
		color: '#10B981' // Green
	}
];

export const CharacterPage: React.FC = () => {
	const breadcrumbItems = [
		{ label: 'Home', path: '/' },
		{ label: 'CharaDo', path: '/charado' },
		{ label: 'Character' }
	];

	return (
		<>
			<Header />
			<Breadcrumb items={breadcrumbItems} />

			{/* Title Section */}
			<section className="product-hero small">
				<div className="container">
					<h1 className="product-title">Partners</h1>
					<p className="product-tagline">
						性格も、言葉遣いも、あなた好みに。<br />
						共に歩むパートナーを選びましょう。
					</p>
				</div>
			</section>

			{/* Character Grid Section */}
			<section className="character-section">
				<div className="container">
					<div className="character-grid">
						{characters.map((char) => (
							<div key={char.id} className="character-card">
								<div className="character-avatar-wrapper">
									{/* 画像がないのでCSSでプレースホルダーを表示 */}
									<div className="character-avatar" style={{ borderColor: char.color }}>
										<span className="char-initial" style={{ color: char.color }}>{char.name[0]}</span>
									</div>
								</div>
								<div className="character-info">
									<span className="character-type">{char.type}</span>
									<h2 className="character-name">{char.name}</h2>
									<p className="character-quote">{char.quote}</p>
									<p className="character-desc">{char.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Customization Section */}
			<section className="custom-section">
				<div className="container custom-inner">
					<div className="custom-content">
						<h2 className="section-title text-left">Full Customization</h2>
						<p className="feature-desc">
							プリセットキャラクターだけではありません。<br />
							Live2Dモデルのインポートや、セリフの編集機能により、<br />
							あなただけの「推し」を再現することが可能です。
						</p>
						<Link to="/contact" className="btn-secondary">仕様について問い合わせる</Link>
					</div>
					<div className="custom-image">
						{/* イメージ図 */}
						<div className="dummy-ui small">
							<div className="ui-header"><span className="dot"></span></div>
							<div className="ui-body center-text">Config UI</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};