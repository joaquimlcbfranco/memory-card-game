import "../styles/Home.css";

function Difficulty({ setDifficulty }) {
  return (
		<div className="difficulty-section">
      <span><img src="https://placehold.co/150" onClick={setDifficulty("easy")} /><p>Easy</p></span>
			<span><img src="https://placehold.co/150" onClick={setDifficulty("medium")} /><p>Medium</p></span>
      <span><img src="https://placehold.co/150" onClick={setDifficulty("hard")} /><p>Hard</p></span>
		</div>
	);
}

export default Difficulty;
