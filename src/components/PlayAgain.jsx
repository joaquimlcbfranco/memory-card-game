function PlayAgain({ prevScore, score, numberOfPokemons }) {
	if (score === numberOfPokemons) {
		return (
			<>
				<h1>
					<span className="victory">You've won!</span> You clicked 'em
					all!
				</h1>
				<button className="play-again-button">Play Again</button>
			</>
		);
	}
	return (
		<>
			<h1>
				<span className="loss">You've lost!</span> Your score was {prevScore}.
			</h1>
			<button className="play-again-button">Play Again</button>
		</>
	);
}

export default PlayAgain;
