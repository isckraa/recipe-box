import React, { Component } from 'react';

class AjouterRecette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            image: "",
            ingredients: "",
            instructions: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const recette = { ...this.state };
        this.props.ajouterRecette(recette);

        // Reset
        Object.keys(recette).forEach(item => {
            recette[item] = "";
        })
        this.setState({ ...recette })
    }

    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom de la recette"
                        required
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder={"Nom de l\'image"}
                        required
                        onChange={this.handleChange}
                    />

                    <textarea 
                        name="ingredients"
                        placeholder="Liste des ingrédients"
                        rows="10"
                        required
                        onChange={this.handleChange}
                    />

                    <textarea 
                        name="instructions"
                        placeholder="Liste des instructions"
                        rows="10"
                        required
                        onChange={this.handleChange}
                    />

                    <button type="submit">Ajouter une recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;