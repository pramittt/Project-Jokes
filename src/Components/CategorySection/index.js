import React, { Component } from 'react'
import Cards from './Cards';

export default class CategorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      category: ''
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
      .then((json) => {
          this.setState({
              items: json,
              DataisLoaded: true
          });
      })
  }

  onCardClick = (value) => {
    this.setState({category: value})
    this.props.onSelect(value)
  }

  render() {
    if(!this.state.DataisLoaded) {
      return <>Loading ....</>
    }
    return <div className='category-section'>
      { this.state.items.map(item => <Cards item={item} activeClass={item === this.state.category ? 'active' : ''} key={item} onClick={this.onCardClick}/> ) }
    </div>
  }
}
