import React from 'react';

const AdminForm = ({ id: key, recettes, majRecette, supprimerRecette }) => { 
    const recette = recettes[key];

    const handleChange = (event, key) => {
        const { name, value } = event.target;
        const recette = recettes[key];
        recette[name] = value;
        majRecette(key, recette);
    }

    return(
        <div>
            <div className="card">
                <form className="admin-form">
                    <input
                        value={recette.nom}
                        onChange={event => handleChange(event, key)}
                        type="text"
                        name="nom"
                        placeholder="Nom de la recette"
                    />

                    <input
                        value={recette.image}
                        onChange={event => handleChange(event, key)}
                        type="text"
                        name="image"
                        placeholder="Image de la recette"
                    />

                    <textarea
                        value={recette.ingredients}
                        onChange={event => handleChange(event, key)}
                        name="ingredients"
                        placeholder="Liste des ingrédients"
                        rows="10"
                    />

                    <textarea
                        value={recette.instructions}
                        onChange={event => handleChange(event, key)}
                        name="instructions"
                        placeholder="Liste des instructions"
                        rows="10"
                    />
                </form>
                <button onClick={() => supprimerRecette(key)}>Supprimmer</button>
            </div>
        </div>
    )
}

export default AdminForm;