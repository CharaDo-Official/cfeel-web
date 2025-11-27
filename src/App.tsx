import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CharaDoHome } from '@/pages/charado/CharaDoHome';
import { Character } from '@/pages/charado/Character';

function App() {
	return (
		<Router>
			<Routes>
				{/* ルートパス (/) にアクセスしたら Home を表示 */}
				<Route path="/" element={<Home />} />

				{/* 例: /charado にアクセスした場合 */}
				<Route path="/charado" element={<CharaDoHome />} />	
				<Route path="/charado/character" element={<Character />} />
			</Routes>
		</Router>
	);
}

export default App;