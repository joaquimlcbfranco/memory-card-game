function Score({ score, numberOfPokemons, highscore }) {
  return (
		<>
			<h1>Score: {score}/{numberOfPokemons}</h1>
      <h1>High Score: {highscore}</h1>
		</>
	);
}

export default Score;
