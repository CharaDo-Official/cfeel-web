import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Home } from '@/pages/Home';
import { CharaDoHome } from '@/pages/charado/CharaDoHome';
import { Character } from '@/pages/charado/Character';
import { Plan } from '@/pages/charado/Plan';
import { Policy } from '@/pages/charado/Policy';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* ルートパス (/) にアクセスしたら Home を表示 */}
				<Route path="/" element={<Home />} />

				{/* CharaDo 関連ページ */}
				<Route path="/charado" element={<CharaDoHome />} />	
				<Route path="/charado/character" element={<Character />} />
				<Route path="/charado/plan" element={<Plan />} />
				<Route path="/charado/policy" element={<Policy />} />
			</Routes>
		</Router>
	);
}

export default App;