import { useState } from "react"
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
	return (
		<>
			<div className="background"></div>
			<Game difficulty={difficulty} />
		</>
	);
}

export default App;
