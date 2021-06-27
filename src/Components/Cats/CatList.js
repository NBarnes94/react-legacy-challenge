import React, { Component } from 'react';

const CatList = (props) => {
  console.log(props);
  return (
    <div>
      {props.cats.map(cat => <li>{cat}</li>)}
    </div>
  )
}

export default CatList;
