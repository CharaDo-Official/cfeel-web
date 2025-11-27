import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { CharaDoHome } from '@/pages/charado/CharaDoHome';
import { Character } from '@/pages/charado/Character';
import { Plan } from '@/pages/charado/Plan';
import { Policy } from '@/pages/charado/Policy';
import { Law } from '@/pages/charado/Law';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* ルートパス (/) にアクセスしたら Home を表示 */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				{/* CharaDo 関連ページ */}
				<Route path="/charado" element={<CharaDoHome />} />	
				<Route path="/charado/character" element={<Character />} />
				<Route path="/charado/plan" element={<Plan />} />
				<Route path="/charado/policy" element={<Policy />} />
				<Route path="/charado/law" element={<Law />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;