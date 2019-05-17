import React, { Component } from 'react'
import axios from "axios";
export default class Details extends Component {


    state = {
        allBeers: {}
      };
    
      componentDidMount() {
       axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`).then(allBeers => {
          console.log("here are the beers", allBeers);
          this.setState({ allBeers: allBeers.data });

          
        });
      }



  render() {

    //this.state.allBeers.map(eachDetail =>{
    //    console.log("hereeeee are the details", eachDetail)
    //})



    return (
        <div className="App" style={{ border: "black 2px solid" }} style={{ margin: "0% 20%" }}>
        <div class="list-group" >
          {this.state.allBeers.name}
        </div>
        <div><img src={this.state.allBeers.image_url} style={{ width: "3vw" }} /></div>
        <div>{this.state.tagline}</div>
        <div> Contributed by: {this.state.allBeers.contributed_by}</div>

      </div>



    //   <div>
    //     <h1>{this.state.allBeers.name}</h1>
    //   </div>
    )
  }
}


