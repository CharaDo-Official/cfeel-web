import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { Home as AboutHome } from '@/pages/aboutus/Home';
import { Privacy } from '@/pages/aboutus/Privacy';
import { Support } from '@/pages/Support';
import { CharaDoHome } from '@/pages/charado/CharaDoHome';
import { Character } from '@/pages/charado/Character';
import { Plan } from '@/pages/charado/Plan';
import { Policy } from '@/pages/charado/Policy';
import { Law } from '@/pages/charado/Law';
import { Terms } from '@/pages/charado/Terms';

function App() {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<ScrollToTop />
			<Header />
			<Routes>
				{/* ルートパス (/) にアクセスしたら Home を表示 */}
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<AboutHome />} />
				<Route path="/aboutus/privacy" element={<Privacy />} />
				<Route path="/support" element={<Support />} />

				{/* CharaDo 関連ページ */}
				<Route path="/charado" element={<CharaDoHome />} />	
				<Route path="/charado/character" element={<Character />} />
				<Route path="/charado/plan" element={<Plan />} />
				<Route path="/charado/policy" element={<Policy />} />
				<Route path="/charado/law" element={<Law />} />
				<Route path="/charado/terms" element={<Terms />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
