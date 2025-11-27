import React from 'react';
import { DocumentLayout } from '@/components/layout/DocumentLayout';

export const Privacy: React.FC = () => {
	return (
		<DocumentLayout
			title="プライバシーポリシー"
			lastUpdated="2025年11月21日"
			breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/aboutus' }, { label: 'Privacy Policy' }]}
		>
			{/* 事業者情報 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">事業者情報</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-1">
					<p>団体名： CFEEL（任意団体）</p>
					<p>代表者： 伊藤颯路</p>
					<p>所在地： 新潟県長岡市上富岡町</p>
					<p>連絡先： charadoofficial@gmail.com</p>
					<p>電話番号： 請求があれば遅滞なく開示いたします</p>
				</div>
			</div>

			{/* 個人情報の収集について */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">個人情報の収集について</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>CharaDoは、ユーザーの個人情報やタスクデータを一切収集しません。</p>
					<p>すべてのデータ（タスク内容、設定情報、ユーザーがアップロードした画像等）は、ユーザーのデバイス内（ローカル環境）で管理されます。CFEELのサーバーへの送信や保存は行いません。</p>
				</div>
			</div>

			{/* Webサイトでの情報収集 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">Webサイトでの情報収集</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>CharaDo公式Webサイトでは、アクセス解析のため以下の情報を収集する場合があります：</p>
					<ul className="list-disc list-inside space-y-1 pl-2">
						<li>アクセスログ（IPアドレス、アクセス日時、閲覧ページ等）</li>
					</ul>
					<p>これらの情報は統計的な分析のみに使用され、個人を特定する目的では使用しません。</p>
				</div>
			</div>

			{/* ユーザーがアップロードする画像について */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">ユーザーがアップロードする画像について</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>ユーザーが本サービスにアップロードする画像は、すべてユーザーのデバイス内にローカル保存され、CFEELのサーバーには一切送信・保存されません。</p>
				</div>
			</div>

			{/* 第三者への提供 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">第三者への提供</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>ユーザーのデータを第三者に提供することはありません。</p>
					<p>ただし、法令に基づく開示請求があった場合はこの限りではありません。</p>
				</div>
			</div>

			{/* お問い合わせ */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">お問い合わせ</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>プライバシーポリシーに関するご質問は、<a href="mailto:charadoofficial@gmail.com" className="text-primary hover:underline">charadoofficial@gmail.com</a>までお問い合わせください。</p>
				</div>
			</div>

			{/* ポリシーの変更 */}
			<div>
				<h2 className="font-bold text-slate-900 mb-3">ポリシーの変更</h2>
				<div className="pl-4 border-l-2 border-slate-100 space-y-2">
					<p>本ポリシーは、必要に応じて変更することがあります。重要な変更がある場合は、Webサイト上でお知らせいたします。</p>
				</div>
			</div>
		</DocumentLayout>
	);
};
