function Card({ id, name, imageUrl, handleCardClick, reset }) {
  if (!name) {
    return (<h1>Loading...</h1>)
  }

	if (name) {
		return (
			<div className="card show" data-id={id} onClick={() => handleCardClick(id)}>
				<div
					className="card-front card-content"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
				<p className="card-content">{name}</p>
			</div>
		);
	}
}

export default Card;
