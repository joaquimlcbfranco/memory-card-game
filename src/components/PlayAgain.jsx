function PlayAgain({ prevScore, score, numberOfPokemons, handlePlayAgain }) {
	if (score === numberOfPokemons) {
		return (
			<>
				<h1>
					<span className="victory">You've won!</span> You clicked 'em
					all!
				</h1>
				<button className="play-again-button play-again-button-rect play-again-button-green" onClick={handlePlayAgain}>Play Again</button>
			</>
		);
	}
	return (
		<>
			<h1>
				<span className="loss">You've lost!</span> Your score was {prevScore}.
			</h1>
			<button className="play-again-button play-again-button-rect play-again-button-red" onClick={handlePlayAgain}>Play Again</button>
		</>
	);
}

export default PlayAgain;
