import React from 'react';
import{AppBar, Typography, Toolbar, withStyles } from "@material-ui/core"
import Dialogs  from '../Dialog/Dialog'


const styles = {
    flex: {
      flex: 1
    }
  }

class Header extends React.Component {
    
    render() {
       const { classes} = this.props
        return (
            <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" className={classes.flex}>
                Exercise Database
                </Typography>
                <Dialogs
                />
            </Toolbar>
          </AppBar>
        )
    }
}

export default withStyles(styles)(Header);