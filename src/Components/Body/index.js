import React, { Component } from 'react'
import CategorySection from '../CategorySection'
import JokeSection from '../JokeSection'
import Button from '../Submit'

export default class Body extends Component {
  state = {
    category: '',
    nextJoke: ''
  }

  onSelectCategory = (value) => {
    this.setState({category: value})
  }

  generateNew = () => {
    this.setState({nextJoke: 'create'})
  }

  render() {
    return <>
      <div className='header'>Chuck Norries</div> 
      <CategorySection onSelect={this.onSelectCategory}/>
      <JokeSection item={this.state.category} nextJoke={this.state.nextJoke}/>
      { this.state.category && <Button generateNew={this.generateNew}/>}
    </>
  }
}