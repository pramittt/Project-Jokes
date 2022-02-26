import React, { Component } from 'react'
import { capitalize } from '../helper'

export default class Cards extends Component {
  state = {
    active: ''
  }

  render() {
    let item = this.props.item
    return (
        <div className={`category-card ${this.props.activeClass}`} onClick={()=>this.props.onClick(item)}>
          {capitalize(item)}
        </div>
    )
  }
}
