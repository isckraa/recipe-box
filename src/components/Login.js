import React, { Component } from 'react';

class Login extends Component {
    render() {
        return(
            <div className="login">
                <h2>Connecte toi pour créer tes recettes</h2>
                <button className="github-button" onClick={this.props.authenticate}>
                    <img src={require('../img/github.png')} alt="github" />
                    Me connecter avec Github
                </button>
            </div>
        )
    }
}

export default Login;