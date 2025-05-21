import Difficulty from "../components/Difficulty.jsx";
import Header from "../components/Header.jsx";
import { useState } from "react"

function Home() {
  const [difficulty, setDifficulty] = useState("easy");

	return (
		<div class="home-container">
			<Header />
      <Difficulty setDifficulty={setDifficulty}/>
		</div>
	);
}

export default Home;
