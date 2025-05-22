import "../styles/Home.css";

function Difficulty({ setDifficulty }) {
	return (
		<>
			<span>
				<div onClick={() => setDifficulty("easy")} />
				<p>Easy</p>
			</span>
			<span>
				<div onClick={() => setDifficulty("medium")} />
				<p>Medium</p>
			</span>
			<span>
				<div onClick={() => setDifficulty("hard")} />
				<p>Hard</p>
			</span>
		</>
	);
}

export default Difficulty;
