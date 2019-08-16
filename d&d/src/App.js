import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Search from './Search/Search';
import SpellBook from './SpellBook/SpellBook';
import SpellBook2 from './SpellBook/SpellBook2';
import Settings from './Settings/Settings';
import Global from './Global/Global';
import axios from 'axios';


class App extends Component {
    state = {
        allDNDData: [],
    };

    allData = [];

    componentDidMount() {
        var didFetchedData = localStorage.getItem("fetchedData");

     axios.get('http://www.dnd5eapi.co/api/spells').then(res => {
            const allDNDData = res.data.results;
            this.setState({allDNDData})
            for (var i = 0; i < allDNDData.length ; i++) {
                axios.get(allDNDData[i].url).then(res => {
                      const data = res.data;
                      this.state.allDNDData.push(data);
                      this.allData.push(data);
                      localStorage.setItem("allDNDData", JSON.stringify(this.allData));
                })
            }
        })
    }

    render() {
     return (
     <Router>
        <div className="App">
            <header className="App-header">
              <Route exact path="/Search" render={(props) => <Search {...props} allPostings={this.allPostings}/>} />
              <Route exact path="/SpellBook2" component={SpellBook2} />
              <Route exact path="/Settings" component={Settings} />
            </header>
            <Navigation>
            </Navigation>
        </div>
     </Router>
         );
        }
    }
export default App;