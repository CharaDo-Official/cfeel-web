import React from 'react';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Link } from 'react-router-dom';

export const CharaDoPage: React.FC = () => {
	// パンくずリストの設定
	const breadcrumbItems = [
		{ label: 'Home', path: '/' },
		{ label: 'CharaDo' }
	];

	return (
		<>
			<Header />
			<Breadcrumb items={breadcrumbItems} />

			{/* Product Hero */}
			<section className="product-hero">
				<div className="container">
					<h1 className="product-title">CharaDo</h1>
					<p className="product-tagline">
						推しと共に、日々を整える。<br />
						キャラクター特化型タスク管理アプリケーション。
					</p>
					<div className="hero-buttons">
						<Link to="/charado/download" className="btn-primary large">Free Download</Link>
					</div>
					
					{/* ここに製品のスクリーンショットなどを置く */}
					<div className="hero-image-wrapper" style={{ marginTop: '40px' }}>
						<div className="dummy-ui">
							<div className="ui-header">
								<span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
							</div>
							<div className="ui-body" style={{ alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
								CharaDo UI Image
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="features-section">
				<div className="container">
					<h2 className="section-title">Features</h2>
					<div className="feature-grid">
						
						<div className="feature-card">
							<span className="feature-icon">👤</span>
							<h3 className="feature-title">Character</h3>
							<p className="feature-desc">
								あなただけのパートナーを設定しましょう。<br />
								タスクを完了するたびに、彼らがあなたを褒めてくれます。
							</p>
							{/* 詳細ページへのリンク */}
							<Link to="/charado/character" style={{ marginTop: '16px', display: 'inline-block', fontSize: '0.9rem', color: '#0F172A', textDecoration: 'underline' }}>
								キャラクターについて &rarr;
							</Link>
						</div>

						<div className="feature-card">
							<span className="feature-icon">📅</span>
							<h3 className="feature-title">Smart Plan</h3>
							<p className="feature-desc">
								無理のない計画をAIが提案。<br />
								「今日はここまで」を明確にし、心の負担を減らします。
							</p>
							<Link to="/charado/plan" style={{ marginTop: '16px', display: 'inline-block', fontSize: '0.9rem', color: '#0F172A', textDecoration: 'underline' }}>
								プラン機能を見る &rarr;
							</Link>
						</div>

						<div className="feature-card">
							<span className="feature-icon">🛡️</span>
							<h3 className="feature-title">Privacy Policy</h3>
							<p className="feature-desc">
								あなたのデータは安全に保護されます。<br />
								ローカル保存を基本としたセキュアな設計です。
							</p>
							<Link to="/charado/policy" style={{ marginTop: '16px', display: 'inline-block', fontSize: '0.9rem', color: '#0F172A', textDecoration: 'underline' }}>
								ポリシーを確認 &rarr;
							</Link>
						</div>

					</div>
				</div>
			</section>
		</>
	);
};