import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import axios from "axios";
import Characters from './component/Characters';
import Characterdetail from './component/Characterdetail'
import House from './component/House'
import Spells from  './component/Spells'
import Header from './component/Header'
import Home from "./component/Home"

import './component/css/app.css'
import './component/css/header.css'

const pass = "$2a$10$LvvwMhAw2Yrc.oZ5a8XIXuVEg2vQS5ub0wmr9lsQZKuKQpWUwqo9a"

export default class App extends Component {
  state = {
    characters: [],
    spells: [],
    houses: [],
    detail: []
  }
  componentDidMount = async () => {
    const respond = await axios.get('http://hp-api.herokuapp.com/api/characters')
    // const detail = await axios.get('http://hp-api.herokuapp.com/api/characters')
    const houses = await axios.get(`https://www.potterapi.com/v1/houses?key=${pass}`)
    const spells = await axios.get(`https://www.potterapi.com/v1/spells?key=${pass}`)

console.log(spells)

    this.setState({
      characters: respond.data,
      houses: houses.data,
      spells: spells.data
    })


  }

  render() {
    return (
      <>


        <Header />

        <div className='app'>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/Characters' exact>
            <Characters charactersArray={this.state.characters} />
          </Route>
          <Route path='/characters/:name' >
            <Characterdetail details={this.state.characters} />
            </Route>
        <Route path='/Spells'>
            <Spells spellArray={this.state.spells} />
            </Route>


          <Route path='/House'>
            <House housesArray={this.state.houses} />
          </Route>

        </div>

      </>
    )
  }
}
