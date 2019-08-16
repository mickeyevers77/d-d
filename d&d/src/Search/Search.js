import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import App from '../App.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './SearchCSS.css';

class Search extends Component {
    state = {
        allPosts: [],
        searchPosts: [],
        showData: [],
    };

    allPostings = [];

    componentDidMount() {
        var prevData = localStorage.getItem("current");
        if (prevData == null || prevData.length == 0) {
            var retrievedData = localStorage.getItem("allDNDData");
            var data = JSON.parse(retrievedData);
            console.log(data);
            this.state.showData = data;
            this.state.allPosts = data;
            this.setState(data);
        } else {
            var data = JSON.parse(prevData);
            this.state.showData = data;
            this.state.allPosts = data;
            this.setState(data);
        }
     }

     onTest = async t => {
                   const showData = [];

     for (var i = 0; i < t.length; i++) {
              axios.get(t[i]).then(res => {
              showData.push(res.data);
                   this.setState({showData});
              })
            }
        }

    onChangeHandler = async e => {
        if (e.target.value == "") {
            this.state.showData = this.state.allPosts;
            this.setState(this.state.showData);
        } else {
            var searchableData = this.state.showData;
            var searchresult = searchableData.filter(item => item.name.includes(e.target.value));
            this.state.showData = searchresult;
            this.setState(this.state.showData);
        }
     };

      handleClick = item => {
        item.added = true;
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        // Modifying
        data.push(item);
        // Saving
        localStorage.setItem("data", JSON.stringify(data));
        const test = this.state.showData;
        console.log(test);
        localStorage.setItem("current", JSON.stringify(test));
        this.setState({test});
        }

    render() {
     return (
        <div style={{textAlign: "left"}}>
        <input className="search"
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        <ul style={{paddingBottom: "60px"}}>
                {
                    this.state.showData.map(data =>
                            <li><u>{data.name}</u>, need level {data.level}
                                <button disabled={data.added} style={{backgroundImage: data.added ? 'url(https://img.icons8.com/cotton/2x/checkmark.png)' : 'url(https://img.icons8.com/cotton/2x/plus--v1.png)',
                                    height: '40px',
                                    width: '40px',
                                    backgroundSize: 'cover',
                                    border: 'none',
                                    backgroundColor: 'transparent'}}
                                    onClick={() => this.handleClick(data)}
                                    type="button">
                                </button>
                            </li>)
                }
         </ul>

         </div>


         );
        }

    }
export default Search;

