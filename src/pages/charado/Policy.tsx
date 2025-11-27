import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const Policy: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 pb-20">
			<Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'CharaDo', path: '/charado' }, { label: 'Policy' }]} />

			<section className="container mx-auto max-w-4xl px-6 py-16">
				<div className="text-center mb-16">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Privacy Policy</h1>
					<p className="text-slate-500 text-lg">
						私たちはあなたのデータを大切に扱います。<br />
						透明性の高いデータポリシーについて。
					</p>
				</div>

				<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 space-y-8">
					<section>
						<h2 className="text-xl font-bold text-primary mb-3">ローカルファースト</h2>
						<p className="text-slate-600 leading-relaxed">
							CharaDoは基本的にオフラインで動作し、タスクデータやログはあなたのデバイス内に保存されます。
							クラウド同期を行わない限り、外部サーバーにデータが送信されることはありません。
						</p>
					</section>
					
					<section>
						<h2 className="text-xl font-bold text-primary mb-3">AI処理について</h2>
						<p className="text-slate-600 leading-relaxed">
							会話やプランニングに使用されるAIモデルの一部はクラウドAPIを使用する場合がありますが、
							個人を特定できる情報は最小限に留められ、学習データとして利用されることはありません。
						</p>
					</section>
				</div>
			</section>
		</div>
	);
};

