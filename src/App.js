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
    base.syncState(`/${this.state.pseudo}/recettes`,{
      context: this,
      state: "recettes"
    })
  }

  chargerExemple = () => {
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
        <Admin chargerExemple={this.chargerExemple}/>
      </div>
    )
  }
}

export default App
