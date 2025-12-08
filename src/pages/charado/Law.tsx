import React from 'react';
import { DocumentLayout } from '@/components/layout/DocumentLayout';
import { SEO } from '@/components/seo/SEO';

export const Law: React.FC = () => {
	return (
		<>
			<SEO 
				title="特定商取引法に基づく表記"
				description="CFEELの特定商取引法に基づく表記。販売事業者、連絡先、支払方法など。"
			/>
			<DocumentLayout
				title="特定商取引法に基づく表記"
				lastUpdated="2025年11月27日"
				breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: '特定商取引法に基づく表記' }]}
			>
				<div className="w-full border-t border-slate-200">
				<table className="w-full text-sm text-left text-slate-700">
					<tbody>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900 w-1/4 min-w-[140px]">販売事業者</th>
							<td className="py-4 px-4">CFEEL（任意団体）</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">運営責任者</th>
							<td className="py-4 px-4">伊藤颯路</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">所在地</th>
							<td className="py-4 px-4">新潟県長岡市上富岡町</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">連絡先</th>
							<td className="py-4 px-4">
								<div className="space-y-1">
									<p>メールアドレス： charadoofficial@gmail.com</p>
									<p>電話番号： 請求があれば遅滞なく開示いたします</p>
									<p>返信時間： 基本的に3営業日以内</p>
								</div>
							</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">販売価格</th>
							<td className="py-4 px-4">Microsoft Store上に表示される価格に従います。</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">商品代金以外の<br className="hidden md:inline" />必要料金</th>
							<td className="py-4 px-4">インターネット接続料金、通信料金等はお客様のご負担となります。</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">支払方法</th>
							<td className="py-4 px-4">Microsoft Storeが提供する決済方法に準じます。</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">支払時期</th>
							<td className="py-4 px-4">Microsoft Storeでの購入手続き完了時に決済されます。</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">商品の引渡時期</th>
							<td className="py-4 px-4">購入手続き完了後、直ちにダウンロード・利用が可能になります。</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">商品の性質について</th>
							<td className="py-4 px-4">
								本サービスは、ユーザーが自己の責任で用意した画像またはオリジナルのキャラクターイラストを使用してタスク管理を行うアプリケーションです。CFEELは画像コンテンツを提供するものではありません。
							</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">ユーザーの責任</th>
							<td className="py-4 px-4">
								ユーザーが使用する画像に関する著作権、肖像権等の権利処理は、ユーザー自身の責任において行ってください。
							</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">返品・キャンセル<br className="hidden md:inline" />について</th>
							<td className="py-4 px-4">
								デジタルコンテンツの性質上、原則として返品・キャンセルはできません。詳細はMicrosoft Storeの返金ポリシーをご確認ください。
							</td>
						</tr>
						<tr className="border-b border-slate-200">
							<th className="bg-slate-50/50 py-4 px-4 font-bold text-slate-900">動作環境</th>
							<td className="py-4 px-4">Microsoft Storeの商品ページに記載されている動作環境をご確認ください。</td>
						</tr>
					</tbody>
				</table>
			</div>
		</DocumentLayout>
		</>
	);
};
