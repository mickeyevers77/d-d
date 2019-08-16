import React, {Component} from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Truncate from 'react-truncate';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './SpellBookCSS.css';
import $ from 'jquery';
import InputLabel from '@material-ui/core/InputLabel';



class SpellBook2 extends Component {

    state = {
        allSpells: [],
        value: 'select',
    };

     handleClick = data => {
        var element = document.getElementById(data._id);
        console.log(element);
         if(element != null) {
            if(element.classList.contains("in")){
            element.classList.remove("in");

            }else{
            element.classList.add("in");
         }
        }
     }

     onChangeSort(e) {
     this.sortData(e.target.value);
        this.setState({
          value: e.target.value
        })
      }

     sortData = value => {
        if (value == "0") {
            console.log("sort 0");
        } else  if (value == "1") {
            console.log("sort 1");
        } else  if (value == "2") {
            console.log("sort 2");
        } else  if (value == "3") {
            console.log("sort 3");
        } else if (value == "4") {
            console.log("sort 4");
        }
     }

    componentDidMount() {
        var retrievedData2 = localStorage.getItem("current");
        var movies3 = JSON.parse(retrievedData2);
        const allSpells = movies3;

        this.setState({allSpells})
    }

    handleDelete = item => {
    item.added = false;
    console.log(item);
    var spells = this.state.allSpells;
    var index = spells.indexOf(item);
    if (index > -1) {
      spells.splice(index, 1);
    }
    console.log(spells);
    const allSpells = spells;
    localStorage.setItem("data", JSON.stringify(allSpells));
    localStorage.setItem("current", JSON.stringify(allSpells));

        this.setState({allSpells})
    }


  render() {
      return (

      <div>

   <Grid
    container
    spacing={50}
    direction="row"
    alignItems="center"
    justify="space-evenly"
    flexGrow = "1"
    style={{ minHeight: '100vh',minWidth: '150vh', maxWidth: '150vh',padding: '50px' }}
   >

    {
    this.state.allSpells.filter(items => items.added === true).map(person =>
     <Grid item xs={6} style={{padding: "50px"}}>
    <Card>
      <CardHeader style={{fontSize: '25px'}}
        avatar={
          <Avatar aria-label="Recipe">
            {person.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="Delete" onClick={() => this.handleDelete(person)}>
          <DeleteIcon/>
          </IconButton>
        }
        title={person.name}
        subheader= {"level: " + person.level }
      />
      <CardContent style={{fontSize: '18px', textAlign: 'left'}}>
            <ul>
                <li><u>range:</u> {person.range}</li>
                <li><u>concentration:</u> {person.concentration}</li>
                <li><u>casting time:</u> {person.casting_time}</li>
                <li><u>duration:</u> {person.duration}</li>


            </ul>
              <ul>

                            <li><u>school:</u> {person.school.name}</li>
                             <li><u>classes:</u>
                            <ul>

                            {
                            person.classes.map(classes =>  <li> {classes.name}</li>)
                            }</ul></li>
                        </ul>

        </CardContent>
        <IconButton onClick={() => this.handleClick(person)}>
          <ExpandMoreIcon/>
        </IconButton>
        <CardContent id={person._id} ref={person._id}  className={"collapse" + (this.state.open ? ' in' : '') + " " + person._id}>
          <Typography paragraph>
            <h2>Description</h2>
            { person.desc }
          </Typography>
          <Typography paragraph>
            <h2>Higher Level</h2>
            { person.higher_level }
          </Typography>
          <Typography paragraph>
            <h2>Material</h2>
            { person.material }
          </Typography>
        </CardContent>
    </Card>
    </Grid>

    )}
      </Grid>
      </div>
      )
  }

}

export default SpellBook2;
