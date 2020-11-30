import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';

class Admin extends Component {
    render() {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props;

        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}/>
                {
                    Object.keys(recettes)
                        .map(key => 
                            <AdminForm 
                                key={key}
                                id={key}
                                recettes={recettes}
                                majRecette={majRecette}
                                supprimerRecette={supprimerRecette}
                            />
                        )
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;