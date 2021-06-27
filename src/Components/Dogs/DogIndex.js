import React, { Component } from 'react'

export default class DogPic extends Component {
    constructor(props) {
        super(props);
        this.state = { apiInfo: '' };

    }
    componentDidMount(){
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(
                res => res.json()
                )
            .then(
                (jsonData) =>{
                    this.setState({apiInfo: jsonData.message})
                }
            )
    }
    dogPicRetrieve () {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(
                res => res.json()
                )
            .then(
                (jsonData) =>{
                    this.setState({apiInfo: jsonData.message})
                }
            )
            // .then(jsonData => {
            //     return JSON.stringify(jsonData.message)
            // })
            // .then(jsonStr => {
            //     console.log(jsonStr);
            //     this.setState((state) =>{
            //         return{ apiInfo: jsonStr}})
                
            // })
    }
    render() {
        console.log(this.state.apiInfo)
        return (
            <div>
                <img src={this.state.apiInfo} alt="dog picture" />
                <button onClick={() => this.dogPicRetrieve()}>Click for a picture of a dog</button>
            </div>
        )
    }
}
