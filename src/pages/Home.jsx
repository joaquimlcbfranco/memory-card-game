import Difficulty from "../components/Difficulty.jsx";
import Header from "../components/Header.jsx";
import StartGame from "../components/StartGame.jsx";

function Home({ difficulty, setDifficulty}) {
	return (
		<div className="home-container">
			<Header />
			<div className="difficulty-section">
        <div className="difficulty-selector">
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
        </div>
        <StartGame />
			</div>
		</div>
	);
}

export default Home;
