import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopPage } from '@/pages/Home';
import { CharaDoPage } from '@/pages/charado/CharaDoHome';
import { CharacterPage } from '@/pages/charado/Character';

function App() {
	return (
		<Router>
			<Routes>
				{/* ルートパス (/) にアクセスしたら TopPage を表示 */}
				<Route path="/" element={<TopPage />} />

				{/* 例: /charado にアクセスした場合 */}
				<Route path="/charado" element={<CharaDoPage />} />	
				<Route path="/charado/character" element={<CharacterPage />} />
			</Routes>
		</Router>
	);
}

export default App;