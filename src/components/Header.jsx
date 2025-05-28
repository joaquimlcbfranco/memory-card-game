import "../styles/Header.css";

function Header() {
	return (
		<div className="header-container">
			<p className="header-title">POKE<span>MEMORY</span></p>
			<p className="header-description">Can you select them all? <br></br><span>(Make sure not to click the same one twice)</span></p>
		</div>
	);
}

export default Header;
