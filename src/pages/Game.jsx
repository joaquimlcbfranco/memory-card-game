import { useState, useEffect } from "react"
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import "../styles/Game.css";

function Game({ difficulty }) {
	const [cards, setCards] = useState([]);

	return (
		<>
			<div className="game-container">
				<Header />
        <div className="score-container">
          <h1>Score: 0/9</h1>
          <h1>High Score: 9</h1>
        </div>
				<div className="card-container">
					<Card id="0"/>
					<Card id="1"/>
					<Card id="2"/>
					<Card id="3"/>
					<Card id="4"/>
					<Card id="5"/>
					<Card id="6"/>
					<Card id="7"/>
          <Card id="8"/>
				</div>
			</div>
		</>
	);
}

export default Game;
