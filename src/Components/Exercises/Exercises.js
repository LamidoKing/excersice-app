import React from 'react'
import { Grid, withStyles, } from '@material-ui/core';
import './Exercises.css'
import Rightpanel from './Rightpanel';
import Leftpanel from './Leftpanel';
import { withContext } from '../../Context';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

 class Exercises extends React.Component {
   
  render() {
    const {
      
      
      classes
    } = this.props
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.item}>
        <Leftpanel
        paper={classes.paper}

        />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.item}>
        <Rightpanel
        paper={classes.paper}
        
        />
        </Grid>
      </Grid>
    )
  }
}


export default withContext(withStyles(styles)(Exercises));