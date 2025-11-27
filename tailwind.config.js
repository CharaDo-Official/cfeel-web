/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
			},
			colors: {
				// 以前の --accent-color (#0F172A) は Tailwindの slate-900 とほぼ同じ
				// なので、基本は slate 系を使いますが、ブランドカラーとして定義してもOK
				primary: '#0F172A',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
}