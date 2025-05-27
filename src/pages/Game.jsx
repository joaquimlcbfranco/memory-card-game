import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Score from "../components/Score.jsx";
import PlayAgain from "../components/PlayAgain.jsx";
import "../styles/Game.css";

function Game({ difficulty = "easy" }) {
	const numberOfPokemons =
		difficulty === "easy" ? 6 : difficulty === "medium" ? 9 : 12;
	const [cards, setCards] = useState([]);
	const [score, setScore] = useState(0);
	const [highscore, setHighscore] = useState(0);
	const [reset, setReset] = useState(false);
	const prevScoreRef = useRef(0);

	const handleCardClick = (id) => {
		setCards(
			cards.map((card) => {
				if (card.id === id) {
					if (card.clicked) {
						setReset(true);
						prevScoreRef.current = score;
            setScore(0);
					} else {
						setScore((prevScore) => prevScore + 1);
						return { ...card, clicked: true };
					}
				}
				return card;
			})
		);
	};

	useEffect(() => {
		if (highscore < score) {
			setHighscore(score);
		}
    if (score === numberOfPokemons) {
      setReset(true);
    }
	}, [score]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const getPokemonData = async () => {
			const pokeId = Math.floor(Math.random() * 900);
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokeId}`,
					{ signal }
				);
				const jsonData = await response.json();
				return jsonData;
			} catch (error) {
				throw new Error(error);
			}
		};

		for (let i = 0; i < numberOfPokemons; i++) {
			getPokemonData().then((result) => {
				setCards((prevCards) => [
					...prevCards,
					{
						id: i,
						name: result.name,
						imageUrl: result.sprites.front_default,
						clicked: false,
					},
				]);
			});
		}

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<div className="game-container">
				<Header />
				<div className="score-container">
					<Score
						score={score}
						numberOfPokemons={numberOfPokemons}
						highscore={highscore}
					/>
				</div>
				<div className="card-container">
					{cards.map((card) => (
						<Card
							key={card.id}
							id={card.id}
							name={card.name}
							imageUrl={card.imageUrl}
							handleCardClick={handleCardClick}
							reset={reset}
						/>
					))}
				</div>
        {reset && <div className="play-again">
          <PlayAgain prevScore={prevScoreRef.current} score={score} numberOfPokemons={numberOfPokemons}/>
        </div>}
			</div>
		</>
	);
}

export default Game;
