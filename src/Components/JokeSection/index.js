import React, { Component } from 'react'

export default class JokeSection extends Component {
  state= {
    joke: ''
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps || !this.state.joke)
      fetch(`https://api.chucknorris.io/jokes/random?category=${this.props.item}`)
      .then((res) => res.json())
        .then((json) => {
            this.setState({
                joke: json.value,
            });
        })
    return true
  }

  render() {
    return (
      <div className='joke-section'>
        Selected Category : {this.props.item}
        { this.state.joke && <div className='joke-area'>{this.state.joke}</div> }
      </div>
    )
  }
}
