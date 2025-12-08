import React from 'react';
import { DocumentLayout } from '@/components/layout/DocumentLayout';
import { SEO } from '@/components/seo/SEO';

export const Policy: React.FC = () => {
	return (
		<>
			<SEO 
				title="CharaDoポリシー"
				description="CharaDoが大切にしていること、画像・動画の使用ルール、二次創作ガイドラインなど。"
			/>
			<DocumentLayout
				title="CharaDoポリシー"
				lastUpdated="2025年11月21日"
				breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: 'Policy' }]}
			>
				<section>
				<h2 className="font-bold text-slate-900 text-xl mb-6 border-b border-slate-200 pb-2">CharaDoが大切にしていること</h2>
				<p className="mb-6 text-slate-600">
					CharaDoは、あなたの大切な人や好きなものの画像と一緒に、楽しくタスク管理を続けられる体験を提供します。私たちは以下の価値を大切にしています。
				</p>

				<div className="space-y-8">
					<div>
						<h3 className="font-bold text-slate-900 mb-2 text-lg">ユーザーのプライバシーを最優先に</h3>
						<p className="pl-4 border-l-2 border-slate-100 text-slate-600">
							CharaDoは個人情報やタスクデータを一切収集しません。すべてのデータ（タスク内容、設定した画像を含む）はあなたのデバイス内で管理され、外部に送信されることはありません。安心してご利用ください。
						</p>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-2 text-lg">自由なカスタマイズ</h3>
						<p className="pl-4 border-l-2 border-slate-100 text-slate-600">
							お子様の写真、ペットの写真、推しのキャラクター、風景写真など、あなたの好きな画像を自由に設定できます。ただし、画像の使用に関する責任はすべてユーザー様にあります。
						</p>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-2 text-lg">シンプルで使いやすく</h3>
						<p className="pl-4 border-l-2 border-slate-100 text-slate-600">
							基本機能は無料でご利用いただけます。必要に応じて拡張機能を追加することで、より充実したタスク管理が可能になります。
						</p>
					</div>

					<div>
						<h3 className="font-bold text-slate-900 mb-2 text-lg">継続的な改善</h3>
						<p className="pl-4 border-l-2 border-slate-100 text-slate-600">
							ユーザーの皆様からのフィードバックを大切にし、より使いやすく、楽しいサービスへと成長し続けます。
						</p>
					</div>
				</div>
			</section>

			<section className="mt-16">
				<h2 className="font-bold text-slate-900 text-xl mb-6 border-b border-slate-200 pb-2">画像・動画の使用について</h2>
				<p className="mb-6 text-slate-600">
					CharaDoでは、お好きな画像や動画を使ってタスク管理を楽しめます。ただし、以下の点に必ずご注意ください。
				</p>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<div className="bg-emerald-50 rounded-xl p-6">
						<h3 className="font-bold text-emerald-800 mb-4 flex items-center text-lg">
							<span className="mr-2">✅</span> できること（個人利用）
						</h3>
						<ul className="space-y-2 text-emerald-900/80">
							<li className="flex items-start"><span className="mr-2">•</span>ご自身で撮影した写真を設定する</li>
							<li className="flex items-start"><span className="mr-2">•</span>ご自身で作成したイラストを設定する</li>
							<li className="flex items-start"><span className="mr-2">•</span>ご家族・お友達の写真を設定する（本人の許可を得た場合）</li>
							<li className="flex items-start"><span className="mr-2">•</span>著作権フリー素材を設定する</li>
							<li className="flex items-start"><span className="mr-2">•</span>個人的に楽しむ範囲で、アニメやゲームのキャラクター画像を設定する</li>
						</ul>
					</div>

					<div className="bg-blue-50 rounded-xl p-6">
						<h3 className="font-bold text-blue-800 mb-4 flex items-center text-lg">
							<span className="mr-2">📱</span> SNSで紹介したい場合
						</h3>
						<p className="text-sm text-blue-900/80 mb-4">CharaDoを紹介したい場合は、以下の方法をお勧めします：</p>
						<h4 className="font-bold text-blue-800 text-sm mb-2">推奨される共有方法</h4>
						<ul className="space-y-2 text-blue-900/80 text-sm mb-4">
							<li className="flex items-start"><span className="mr-2">✓</span>キャラクター部分をモザイク・スタンプで隠す</li>
							<li className="flex items-start"><span className="mr-2">✓</span>文章のみで紹介する</li>
							<li className="flex items-start"><span className="mr-2">✓</span>自分で撮影した写真やオリジナルイラストの場合のみ公開する</li>
							<li className="flex items-start"><span className="mr-2">✓</span>自作素材を使用している場合は積極的な共有を推奨します</li>
						</ul>
						<div className="bg-white/50 rounded p-3 text-xs text-blue-900">
							<p className="font-bold mb-1">⚠️ 注意事項</p>
							個人的に楽しむ範囲であれば著作物を使用できますが、それをSNS等で公開した瞬間に著作権侵害となる可能性があります。
						</div>
					</div>
				</div>

				<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
					<h3 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
						<span className="mr-2">🛡</span> 運営の責任範囲
					</h3>
					<ul className="space-y-2 text-slate-600">
						<li className="flex items-start"><span className="mr-2">•</span>画像・動画の使用に関する責任は、すべてユーザー様にあります</li>
						<li className="flex items-start"><span className="mr-2">•</span>著作権侵害などの問題が生じた場合、運営は一切の責任を負いません</li>
						<li className="flex items-start"><span className="mr-2">•</span>違法な使用が判明した場合、アカウントの利用を制限し、必要に応じて法的措置を取る場合があります</li>
					</ul>
				</div>
			</section>

			<section className="mt-16">
				<h2 className="font-bold text-slate-900 text-xl mb-6 border-b border-slate-200 pb-2">素材の使用ルール</h2>
				<p className="mb-6 text-slate-600">
					CharaDoで使用できる素材は、以下の3パターンに分類されます。
				</p>

				<div className="space-y-8">
					{/* Pattern 1 */}
					<div className="border border-slate-200 rounded-xl overflow-hidden">
						<div className="bg-slate-50 p-4 border-b border-slate-200">
							<h3 className="font-bold text-slate-900">1. デフォルト素材（つむぎのあ）</h3>
						</div>
						<div className="p-6 space-y-6">
							<div className="grid sm:grid-cols-2 gap-4">
								<div>
									<span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded mr-2">共有: ✅ OK</span>
								</div>
								<div>
									<span className="inline-block px-2 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded mr-2">自作発言: ❌ NG</span>
									<p className="text-xs text-slate-500 mt-1">公式提供素材のため、制作者を偽ることは著作権侵害にあたります</p>
								</div>
							</div>

							<div>
								<div className="flex items-center mb-3">
									<span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded mr-2">二次創作: ✅ OK</span>
									<span className="text-xs text-slate-500">以下の条件を遵守すること</span>
								</div>
								
								<div className="grid sm:grid-cols-2 gap-6 text-sm">
									<div>
										<h4 className="font-bold text-emerald-700 mb-2">✅ 許可される二次創作</h4>
										<ul className="list-disc list-inside space-y-1 text-slate-600">
											<li>キャラクターのイメージを尊重した健全な表現</li>
											<li>ファンアートやイラスト</li>
											<li>非営利の個人使用の範囲内での創作</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-rose-700 mb-2">❌ 禁止される二次創作</h4>
										<p className="text-xs text-slate-500 mb-2">以下に該当する創作物の公開・利用は厳禁</p>
										<ul className="list-disc list-inside space-y-1 text-slate-600">
											<li>本作品または第三者の名誉を害する目的のもの</li>
											<li>暴力的・グロテスクな表現を含むもの</li>
											<li>性的描写を含むもの</li>
											<li>特定の政治・宗教・信条を支援する、または貶めるもの</li>
											<li>反社会的な表現を含むもの</li>
											<li>第三者の権利を侵害するもの</li>
											<li>キャラクターのイメージを著しく損なう表現</li>
										</ul>
									</div>
								</div>
								<p className="text-xs text-rose-600 mt-3 font-bold">⚠️ 上記に違反した場合、やむを得ず法的措置を検討する場合があります</p>
							</div>

							<div>
								<span className="inline-block px-2 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded mr-2">商用利用: ❌ 不可</span>
								<span className="text-xs text-slate-500">いわゆる「同人活動」の範囲を超える商業利用・営利目的は禁止</span>
							</div>
						</div>
					</div>

					{/* Pattern 2 */}
					<div className="border border-slate-200 rounded-xl overflow-hidden">
						<div className="bg-slate-50 p-4 border-b border-slate-200">
							<h3 className="font-bold text-slate-900">2. 自作素材</h3>
						</div>
						<div className="p-6 space-y-4">
							<div>
								<span className="font-bold text-slate-700 mr-2">基本的な使用:</span>
								<span className="text-emerald-600 font-bold">✅ なんでもOK</span>
							</div>
							<div>
								<span className="font-bold text-slate-700 block mb-1">配布する場合:</span>
								<p className="text-slate-600 text-sm">配布者として責任が伴います</p>
							</div>
							<div className="bg-amber-50 p-3 rounded text-sm text-amber-800">
								<span className="font-bold mr-2">注意事項:</span>
								他者に配布する際は、適切な利用規約を設定してください
							</div>
						</div>
					</div>

					{/* Pattern 3 */}
					<div className="border border-slate-200 rounded-xl overflow-hidden">
						<div className="bg-slate-50 p-4 border-b border-slate-200">
							<h3 className="font-bold text-slate-900">3. 他者から入手した素材</h3>
						</div>
						<div className="p-6 space-y-4">
							<div>
								<span className="font-bold text-slate-700 block mb-1">使用ルール:</span>
								<p className="text-slate-600 text-sm">配布者が定めるルールに準拠してください</p>
							</div>
							<div>
								<span className="font-bold text-slate-700 block mb-1">責任範囲:</span>
								<p className="text-slate-600 text-sm">当運営は素材の使用に関する責任を負いません</p>
							</div>
							<div className="bg-amber-50 p-3 rounded text-sm text-amber-800">
								<span className="font-bold mr-2">確認事項:</span>
								素材を使用する前に、必ず配布元の利用規約をご確認ください
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="mt-16 pt-8 border-t border-slate-200">
				<h2 className="font-bold text-slate-900 mb-4">お問い合わせ</h2>
				<p className="text-slate-600 mb-4">
					ご質問やご要望がございましたら、お気軽にお問い合わせください。
				</p>
				<div className="space-y-2 text-slate-700">
					<p>連絡先: <a href="mailto:charadoofficial@gmail.com" className="text-primary hover:underline">charadoofficial@gmail.com</a></p>
					<p>返信時間: 基本的に3営業日以内にご返信いたします</p>
				</div>
			</div>
		</DocumentLayout>
		</>
	);
};
