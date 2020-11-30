import React, { Component } from 'react'
import Header from './components/Header';
import Admin from './components/Admin';
import Card from './components/Card';
import recettes from './recettes';
import './App.css'

// Firebase
import base from "./utils/firebase";

class App extends Component {
  state = {
    recettes: {},
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context: this,
      state: "recettes"
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => {
    this.setState({ recettes });
  }

  ajouterRecette = (recette) => {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({ recettes });
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = newRecette;
    this.setState({ recettes });
  }

  supprimerRecette = (key) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = null;
    this.setState({ recettes });
  }

  render () {
    const cards = Object
      .keys(this.state.recettes)
      .map(key => 
        <Card key={key} details={this.state.recettes[key]} />
      )

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          {cards}
        </div>
        <Admin
          recettes={this.state.recettes}
          chargerExemple={this.chargerExemple}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
        />
      </div>
    )
  }
}

export default App
