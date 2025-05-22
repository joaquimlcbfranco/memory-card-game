import { useState, useEffect } from "react";

function Card({ id }) {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		const getPokemonData = async () => {
			const pokeId = Math.floor(Math.random() * 900);
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokeId}`
			);
			const jsonData = await response.json();
			setPokemon({
				name: jsonData.name,
				url: jsonData.sprites.front_default,
			});
		};

		getPokemonData();
	}, []);

  if (!pokemon) {
    return (<h1>Loading...</h1>)
  }

	if (pokemon) {
		return (
			<div className="card show" data-id={id}>
				<div
					className="card-front card-content"
					style={{
						backgroundImage: `url(${pokemon.url})`,
					}}
				></div>
				<p className="card-content">{pokemon.name}</p>
			</div>
		);
	}
}

export default Card;
