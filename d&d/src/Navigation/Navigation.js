import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings'
import Search from '../Search/Search';
import Settings from '../Settings/Settings';
import './Navigation.css';


class Navigation extends Component {
  state = {
    value: 0,
    pathMap: [
      'Search',
      'SpellBook2',
      'Settings'
    ]
  };

  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
   console.log(value);
  };

  render() {
    const {value, pathMap} = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="stickToBottom"
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} component={Link} to={pathMap [0]}  />
        <BottomNavigationAction label="SpellBook" icon={<BookIcon />} component={Link} to={pathMap [1]}  />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to={pathMap [2]}  />


      </BottomNavigation>
    );
  }
}

export default withRouter(Navigation);