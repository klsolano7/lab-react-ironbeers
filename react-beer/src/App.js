import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Beer from '../src/img/beer.jpg'
import { Switch, Route, Redirect } from 'react-router-dom';
import NewBeer from './Components/NewBeer'
import RandomBeer from './Components/RandomBeer'
import AllBeers from './Components/AllBeers'
import Home from './Components/Home'
import Details from './Components/Details'


class App extends React.Component {



state ={
  beers : 'empty'
}



  render(){

  return (
    
    <div className="App" >
    {/* <img src={Beer} /> */}
      <Navbar />
      {/* {this.showBeers()} */}

      <Switch>
          <Route exact path='/' component={Home} />
          <Route  exact path='/allbeers' component={AllBeers} />
          <Route  exact path='/randombeer/' component={RandomBeer}/>} />
                    <Route  exact path='/allbeers' component={(props) => {return <AllBeers {...props} />}} />

          <Route exact path='/newbeer/' component={NewBeer}/>
          <Route path='/beers/:id' component={Details}></Route>

        </Switch>
    </div>
  )};
}


export default App;
