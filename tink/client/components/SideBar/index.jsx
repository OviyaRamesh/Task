import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui-icons/Add';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import Chip from 'material-ui/Chip';


const styles = theme => ( {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    margin:'0px 0px 0px 15px',
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 345,
    marginTop: theme.spacing.unit * 3,
    borderLeftColor: 'blue',
    borderRadius: 4,
    },
  media: {
    width: 151,
    height: 151,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    margin:'0px 0px 0px 980px',
    width: 'calc(80% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',

    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },

  margin: {
    margin:'0px 1100px 0px 0px',
  },
  margin2: {
    margin:'10px 0px 0px 290px',
  },
  padding: {
    padding: `10px`,
  },

  avatar: {
    margin: 0,
  },

  root: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: theme.spacing.unit * 3,
    marginLeft:'2%',
    
  }),

  blockquote:{
    borderColor: 'rgba(0,0,0,0.38)',
  }




});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
     <div className={classes.container}>
     
      <AppBar position="static">
        <Toolbar>
        <Button  color="primary" >
          <img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_send_white_24px.svg"}/> 
          </Button>
          <Button color="inherit">
          <h5>Board</h5><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_keyboard_arrow_down_white_24px.svg"}/> 
          </Button>
          <Badge color="secondary" badgeContent={4} className={classes.margin}>
          <Typography  color="inherit"><h4>Activity</h4>  </Typography>
          </Badge>
          <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={classes.avatar} />
          <Button color="inherit">
          <img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_keyboard_arrow_down_white_24px.svg"}/> 
          </Button>
          </Toolbar>
      </AppBar>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography  color="inherit">
            <b>Design Block</b>
          </Typography>
          
          <TextField
              
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
      <img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_search_black_24px.svg"}/>
      <Button variant="raised" color="primary" >
      <img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_add_white_24px.svg"}/>
      New Card</Button>
        </Toolbar>
      </AppBar>

      <Paper className={classes.root} elevation={5}>

      <Paper className={classes.root} elevation={2}>
       <Typography component="p">
           Monestisation (Share revenue with developers)
       </Typography>
       <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
       <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 2 </Button>
       <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_assignment_turned_in_black_24px.svg"}/> 2/4</Button>
       </Paper>

       <Paper className={classes.root} elevation={2}>
            <img src={"client\components\SideBar\ss.jpg"} className={classes.media}/>  
          <Typography component="p">
           Post new Dribble shot and share it on social media
          </Typography>
          <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 2 </Button>
      </Paper>   
   

      <Paper className={classes.root} elevation={2}>
       <Typography component="p">
           New Infographic Designs for Investors
       </Typography>
       </Paper>

      <Paper className={classes.root} elevation={2}>
       <Typography component="p">
           Design a new dashboard for Apple watch
       </Typography>
       <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
       <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 2 </Button>
       <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_assignment_turned_in_black_24px.svg"}/> 2/4</Button>
       </Paper>


      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </Paper>

    <Paper className={classes.root} elevation={5}>

      <Paper className={classes.root} elevation={2}>
      <Typography component="p">
           Monestisation (Share revenue with developers)
       </Typography>
      </Paper>

      <Paper className={classes.root} elevation={2}>
      <Typography component="p">
          Release new version of landing page designed by joel
      </Typography><br/>
      <Button variant="raised" color="secondary" size="small" className={classes.button}>
      <AccessAlarmIcon className={classes.icon} />12:00
       </Button> 
      </Paper>

      <Paper className={classes.root} elevation={2}>
       <Typography component="p">
           Discuss new ideas about new Marketing techniques
       </Typography>
       <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
       <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 2 </Button>
      </Paper> 

       <Paper className={classes.root} elevation={2}>
            <img src={"client\components\SideBar\ss.jpg"} className={classes.media}/>  
          <Typography component="p">
           Unsplash.com Research, find the best examples for article
          </Typography>
          <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 2 </Button>
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_assignment_turned_in_black_24px.svg"}/> 2/4</Button>
        </Paper>  



      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </Paper>

<Paper className={classes.root} elevation={5}>     

        <Paper className={classes.root} elevation={2}>
            <img src={"client\components\SideBar\ss.jpg"} className={classes.media}/>  
          <Typography component="p">
           Unsplash.com Research, find the best examples for article
          </Typography>
          <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 8 </Button>
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_assignment_turned_in_black_24px.svg"}/> 0/4</Button>
        </Paper>  

        <Paper className={classes.root} elevation={2}>
            <img src={"client\components\SideBar\ss.jpg"} className={classes.media}/>  
          <Typography component="p">
           Unsplash.com Research, find the best examples for article
          </Typography>
          <Avatar alt="Remy Sharp" src="client\components\SideBar\cantik.jpg" className={ classes.margin2} />     
        <Button><img src={"https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_forum_black_24px.svg"}/> 3 </Button>
        
        </Paper>  

        <Paper className={classes.root} elevation={2}>
      <Typography component="p">
          Release new version of landing page designed by joel
      </Typography><br/>
      <Button variant="raised" color="secondary" size="small" className={classes.button}>
      <AccessAlarmIcon className={classes.icon} />15:00
       </Button> 
      </Paper>

      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>

</Paper>


    </div>
    </div>
   
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);