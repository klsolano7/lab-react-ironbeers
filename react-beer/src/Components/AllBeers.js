import React from "react";
import axios from "axios";
import { Router, Link, NavLink } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers`).then(allBeers => {
    //   console.log("here are the beers", allBeers);
      this.setState({ allBeers: allBeers.data });
    });
  }

  //   showBeers = () => {
  //     return this.state.allBeers.map(eachBeer=>{
  //       return <li>{eachBeer.name}  <img src={eachBeer.image_url}/></li>
  //     })
  //   }

  render() {
    return (
      <div >
        {this.state.allBeers.map(eachBeer => {
            // console.log("here are the beers", eachBeer)
          return (
            <div className="App" style={{ border: "black 2px solid" }} style={{ margin: "0% 20%" }}>
              <div class="list-group" >
                {eachBeer.name}
              </div>
              <div><img src={eachBeer.image_url} style={{ width: "3vw" }} /></div>
              <div>{eachBeer.tagline}</div>
              <div> Contributed by: {eachBeer.contributed_by}</div>
              <Link to={`/beers/${eachBeer._id}`}><button>Details</button></Link>
            </div>
          );
        })}
        }{/* {this.showBeers()} */}
      </div>
    );
  }
}

export default AllBeers;
