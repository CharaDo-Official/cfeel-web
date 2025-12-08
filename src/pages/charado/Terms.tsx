import React from 'react';
import { DocumentLayout } from '@/components/layout/DocumentLayout';
import { SEO } from '@/components/seo/SEO';

export const Terms: React.FC = () => {
	return (
		<>
			<SEO 
				title="利用規約"
				description="CharaDo（本サービス）の利用規約。"
			/>
			<DocumentLayout
				title="利用規約"
				lastUpdated="2025年11月21日"
				breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: '利用規約' }]}
			>
				{/* Article 1 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第1条（適用範囲）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					本規約は、CharaDo（以下「本サービス」）の利用に関する条件を定めるものです。ユーザーは本規約に同意した上で本サービスを利用するものとします。
				</p>
			</div>

			{/* Article 2 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第2条（サービスの提供）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>本サービスは、Microsoft Storeを通じて提供されます</p>
					<p>本サービスの購入・決済はMicrosoft Storeの規約に従います</p>
					<p>Microsoft Storeの規約と本規約が矛盾する場合、Microsoft Storeの規約が優先されます</p>
					<p>本サービスは、基本的にインターネット通信を行わず、ローカルで動作するアプリケーションソフトウェアです</p>
				</div>
			</div>

			{/* Article 3 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第3条（定義）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>本規約において使用する用語の定義は以下のとおりとします：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>「ユーザーコンテンツ」とは、ユーザーが本サービスに適用する画像、動画、イラスト等のコンテンツを指します</li>
						<li>「CharaDoコンテンツ」とは、本サービスが提供するデフォルト素材（つむぎのあ等）を指します</li>
						<li>「第三者提供コンテンツ」とは、ユーザーが第三者から入手した素材を指します</li>
						<li>「CFEEL」とは、本サービスを運営するCFEEL（代表：伊藤颯路）を指します</li>
						<li>「本サービス」とは、アプリケーションの提供およびCharaDoコンテンツの提供を含む、CharaDo全体のサービスを指します</li>
					</ul>
				</div>
			</div>

			{/* Article 4 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第4条（ユーザーコンテンツ）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>ユーザーは、本サービスにおいて自己の責任でユーザーコンテンツを適用し、利用することができます</p>
					<p>ユーザーは、ユーザーコンテンツについて、以下の事項を遵守するものとします：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>ユーザーコンテンツに関する一切の権利（著作権、肖像権、商標権等を含むがこれに限らない）を有していること、または正当な使用許諾を得ていること</li>
						<li>ユーザーコンテンツが公序良俗に反しないこと</li>
					</ul>
					<p>CFEELは、ユーザーコンテンツの内容について一切関与せず、その合法性、正確性、適切性について保証しません</p>
					<p>ユーザーコンテンツに起因してCFEELまたは第三者に損害が生じた場合、ユーザーは自己の責任と費用においてこれを解決し、CFEELに一切の損害を与えないものとします</p>
					<p>ユーザーコンテンツはユーザーのデバイス内にローカル保存され、CFEELのサーバーには保存されません</p>
				</div>
			</div>

			{/* Article 5 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第5条（ユーザーコンテンツの使用範囲）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>ユーザーは、ユーザーコンテンツを私的使用の範囲内（著作権法第30条に定める範囲内）でのみ使用するものとし、以下の行為を行ってはなりません：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>ユーザーコンテンツ（またはユーザーコンテンツを含む画面）をSNS、ブログ、動画サイト等で公開する行為</li>
						<li>ユーザーコンテンツを第三者に配布、共有、送信する行為</li>
						<li>ユーザーコンテンツを含む本サービスの画面をスクリーンショット等で撮影し、公開する行為</li>
						<li>その他、ユーザーコンテンツを私的使用の範囲を超えて利用する行為</li>
					</ul>
					<p>ユーザーが第三者の著作物をユーザーコンテンツとして使用する場合は、著作権法第30条に定める私的使用の範囲内でのみ使用してください</p>
					<p>前項の規定に違反した場合、ユーザーは自己の責任において著作権者との間で生じた一切の問題を解決し、CFEELに損害を与えないものとします</p>
				</div>
			</div>

			{/* Article 6 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第6条（未成年者の利用）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					未成年者が本サービスを利用する場合は、保護者の同意を得た上でご利用ください。
				</p>
			</div>

			{/* Article 7 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第7条（禁止事項）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>ユーザーは以下の行為を行ってはなりません：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>本サービスを不正な目的で利用する行為</li>
						<li>本サービスのリバースエンジニアリング、逆コンパイル、逆アセンブル</li>
						<li>本サービスの複製、改変、翻案</li>
						<li>本サービスを第三者に再配布、再販売する行為</li>
						<li>第三者の著作権、商標権、肖像権、プライバシー権、その他の権利を侵害する画像、イラスト等をユーザーコンテンツとして使用する行為</li>
						<li>公序良俗に反する画像、イラスト等をユーザーコンテンツとして使用する行為</li>
						<li>違法なコンテンツ、暴力的なコンテンツ、差別的なコンテンツをユーザーコンテンツとして使用する行為</li>
						<li>未成年者の画像を、本人および保護者の同意なく使用する行為</li>
						<li>その他、CFEELが不適切と判断する行為</li>
					</ul>
					<p className="text-xs text-slate-500 mt-2">※違反が判明した場合、CFEELは事前通知なくユーザーのアカウントを停止または削除することができます。</p>
				</div>
			</div>

			{/* Article 8 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第8条（知的財産権）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					本サービス（ユーザーコンテンツを除く）に関する著作権、商標権、その他の知的財産権はすべてCFEELに帰属します。
				</p>
			</div>

			{/* Article 9 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第9条（有料機能）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>拡張機能は有料で提供されます</p>
					<p>価格及び支払方法はMicrosoft Storeの表示に従います</p>
					<p>購入後のキャンセル・返金はMicrosoft Storeの規約に準じます</p>
				</div>
			</div>

			{/* Article 10 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第10条（サービスの変更・中断・終了）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>CFEELは、事前の通知なく本サービスの内容を変更、追加、削除することができます</p>
					<p>CFEELは、以下の場合に本サービスを中断または終了することができます：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>システムの保守・点検を行う場合</li>
						<li>天災地変等の不可抗力により提供が困難な場合</li>
						<li>その他、CFEELがやむを得ないと判断した場合</li>
					</ul>
				</div>
			</div>

			{/* Article 11 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第11条（免責事項）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>本サービスは「現状有姿」で提供されます</p>
					<p>CFEELは、本サービスの完全性、正確性、有用性について保証しません</p>
					<p>CFEELは、以下の事項について一切の責任を負いません：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>ユーザーがユーザーコンテンツとして使用する画像、イラスト等の著作権、肖像権、その他の権利侵害</li>
						<li>ユーザーのユーザーコンテンツの使用により生じた第三者との紛争</li>
						<li>ユーザーがユーザーコンテンツを使用することにより被った損害</li>
						<li>ユーザーコンテンツの削除、消失、破損</li>
						<li>本サービスの利用により生じた損害（ただし、CFEELの故意または重過失による場合を除く）</li>
					</ul>
					<p>ユーザーと第三者との間でユーザーコンテンツに関する紛争が生じた場合、ユーザーは自己の責任と費用においてこれを解決し、CFEELに一切の迷惑をかけないものとします</p>
				</div>
			</div>

			{/* Article 12 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第12条（損害賠償）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					CFEELの責に帰すべき事由によりユーザーに損害が生じた場合、CFEELが賠償する範囲は、ユーザーが本サービスに支払った金額を上限とします。
				</p>
			</div>

			{/* Article 13 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第13条（規約の変更）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					CFEELは、必要に応じて本規約を変更することができます。変更後の規約は、Webサイト上に掲載した時点で効力を生じます。
				</p>
			</div>

			{/* Article 14 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第14条（準拠法・管轄裁判所）</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>本規約の準拠法は日本法とします</p>
					<p>本サービスに関する一切の紛争については、新潟地方裁判所長岡支部を第一審の専属的合意管轄裁判所とします</p>
				</div>
			</div>

			{/* Article 15 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第15条（分離可能性）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					本規約のいずれかの条項が無効と判断された場合でも、その他の条項は有効に存続します。
				</p>
			</div>

			{/* Article 16 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第16条（協議解決）</h2>
				<p className="pl-4 border-l-2 border-slate-100">
					本規約に定めのない事項または本規約の解釈に疑義が生じた場合は、CFEELとユーザーが誠実に協議の上解決するものとします。
				</p>
			</div>

			<div className="mt-12 pt-8 border-t border-slate-200">
				<p className="font-bold text-slate-900 mb-2">お問い合わせ先</p>
				<p>CFEEL</p>
				<p>代表：伊藤颯路</p>
			</div>
		</DocumentLayout>
		</>
	);
};
