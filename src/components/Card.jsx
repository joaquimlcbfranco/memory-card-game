import { useState, useEffect } from "react";

function Card({ id }) {
	const [card, setCard] = useState({
		id: id,
		url: "https://placehold.co/150",
		clicked: false,
	});

	useEffect(() => {
		const cardDom = document.querySelector("[data-id='0']");
		const listener = cardDom.addEventListener("click", () =>
			console.log(card)
		);

		return () => {
			cardDom.removeEventListener("click", listener);
		};
	}, [card]);

	return (
		<div className="card" data-id={card.id}>
			<div
				style={{ backgroundImage: card.url }}
				className="card-front"
			></div>
		</div>
	);
}

export default Card;
