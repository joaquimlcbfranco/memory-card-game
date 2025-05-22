import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import "../styles/Game.css"

function Game({ difficulty, setDifficulty }) {
	return (
		<>
			<div className="game-container">
				<Header />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
			</div>
		</>
	);
}

export default Game;
