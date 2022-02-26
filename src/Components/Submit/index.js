import React, { Component } from 'react'

export default class Button extends Component {
  generateNewJoke() {
    this.props.generateNew();
  }

  render() {
    return (
      <div className='submit-area'>
        <button className='new-joke-btn' onClick={this.props.generateNew}>New Joke</button>
      </div>
    )
  }
}
