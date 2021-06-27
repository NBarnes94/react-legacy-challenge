import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { useState } from 'react';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: ''
    }
  }

  editSearchTerm = (e) =>{
    this.setState({searchTerm: e.target.value})
  }

  searchFunction = () => {
    return this.state.things.filter(thing => thing.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Input type='text' placeholder='Search Here' value={this.state.searchTerm} onChange={this.editSearchTerm} />
        <h3>Results:</h3>
        <ThingsContainer things = {this.searchFunction()} />
      </div>
    )
  }
}

class ThingsContainer extends Component {
  render(){
    return(
      <div>
        {this.props.things.map(thing => <Thing thing = {thing} />)}
      </div>
    )
  }
}
class Thing extends Component{
  render(){
    return(
      <div>
        {this.props.thing}
      </div>
    )
  }
}

// export default SearchIndex;
