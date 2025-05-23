function Score({ score, prevScore, numberOfPokemons, highscore, reset }) {
	return (
		<>
			<h1>Score: {score}/{numberOfPokemons}</h1>
      <h1>High Score: {highscore}</h1>
      {reset === true && <p>You've lost, your score was {prevScore}</p>}
		</>
	);
}

export default Score;
