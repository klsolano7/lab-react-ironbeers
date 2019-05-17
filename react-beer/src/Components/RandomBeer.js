import React from 'react';
import axios from "axios";
// import { Router, Link, NavLink } from 'react-router-dom';

class RandomBeer extends React.Component{


    state = {
        allBeers: {}
      };
    
      componentDidMount() {
        axios.get(`https://ih-beer-api.herokuapp.com/beers/random`).then(allBeers => {
          console.log("here are the beers", allBeers);
          this.setState({ allBeers: allBeers.data });
        });
      }



    //   return Math.floor(Math.random(allBeers)

    randomBeer = () =>{
        axios.get(`https://ih-beer-api.herokuapp.com/beers/random`).then(allBeers => {
            console.log("here are the beers", allBeers);
            this.setState({ allBeers: allBeers.data });
          });
    }

    


    render(){
        return(
            <div className="App" style={{ border: "black 2px solid" }} style={{ margin: "0% 20%" }}>
            <div class="list-group" >
              {this.state.allBeers.name}
            </div>
            <div><img src={this.state.allBeers.image_url} style={{ width: "3vw" }} /></div>
            <div>{this.state.tagline}</div>
            <div> Contributed by: {this.state.allBeers.contributed_by}</div>
            <button onClick={this.randomBeer}>Get Random Beer</button>
          </div>
        )
    }
}

export default RandomBeer