import React from 'react';

const Card = ({ details }) => {
    const requireImage = (chemin) => {
        try {
            return require(`../img/${chemin}`)
        } catch( error ) {
            return require(`../img/default.jpeg`)
        }
    }

    const ingredients = details.ingredients
        .split(',')
        .map(item =>
            <li key={item.trim()}>{item.trim()}</li>
        )

    const instructions = details.instructions
        .split('\n')
        .map(item =>
            <li key={item.trim()}>{item.trim()}</li>
        )

    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(details.image)} alt={details.nom} />
            </div>
            <div className="recette">
                <h2>{details.nom}</h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    );
}

export default Card;