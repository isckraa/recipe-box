import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';
import Login from './Login';

import firebase from 'firebase/app';
import 'firebase/auth';
import base, { firebaseApp } from '../utils/firebase';

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    authenticate = () => {
        const authProvider = new firebase.auth.GithubAuthProvider();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logOut = async () => {
        await firebase.auth().signOut;
        this.setState({ uid: null })
    }

    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, { context: this });

        if(!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    render() {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props;

        if(!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }

        if(this.state.uid !== this.state.chef) {
            return (
                <div><p style={{ textAlign: 'center' }}>Tu n'es pas le chef de cette boîte</p></div>
            )
        }

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
                    <button onClick={this.logOut}>Déconnexion</button>
                </footer>
            </div>
        );
    }
}

export default Admin;