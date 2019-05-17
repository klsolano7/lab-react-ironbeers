import React from 'react';
// import { Router, Link, NavLink } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={require('../img/beer.jpg')} style={{backgroundSize: 'cover', height: '100%', width: '100%'}}/>
            </div>
        )
    }
}

export default Home;