export interface MenuItem {
	label: string;
	path: string;
	children?: MenuItem[];
}

export const MAIN_NAVIGATION: MenuItem[] = [
	{
		label: 'CharaDo',
		path: '/charado',
		children: [
			{ label: 'Home', path: '/charado' },
			{ label: 'キャラクター', path: '/charado/character' },
			{ label: 'プラン', path: '/charado/plan' },
			{ label: 'ポリシー', path: '/charado/policy' },
			{ label: '利用規約', path: '/charado/terms' },
			{ label: '特定商取引法に基づく表記', path: '/charado/law' }
		]
	},
	{
		label: 'About Us',
		path: '/aboutus',
		children: [
			{ label: 'About Us', path: '/aboutus' },
			{ label: 'プライバシーポリシー', path: '/aboutus/privacy' }
		]
	},
	{
		label: 'Support',
		path: '/support',
	}
];

export const CONTACT_LINK = {
	label: 'Contact',
	path: '/contact'
};

