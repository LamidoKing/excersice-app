import React, { Fragment } from 'react'
import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'
import { withContext } from '../../Context';



class Leftpanel extends React.Component {

    render(){
        const {musclesExercises, 
            category, 
            onSelect, 
            onDelete, 
            onSelectEdit,
            paper
        } = this.props
        return(

            <Paper className={paper}>

          {musclesExercises.map(([group, musclesExercises]) =>
          !category || category === group ?
            <Fragment key={group}>
        <Typography variant="headline" className="typo" color='secondary' >
          {group}
        </Typography>
        <List component="ul" >
        {musclesExercises.map(({id, title} ) =>
      <ListItem button
      key={id}
      onClick={() => onSelect(id)}>
      <ListItemText primary={title}
      />
      <ListItemSecondaryAction>
          <IconButton onClick={() => onSelectEdit(id)} color='primary'>
          <Edit/>
          </IconButton>
          <IconButton onClick={() => onDelete(id)} color='primary'>
          <Delete/>
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    )}
    </List>
    </Fragment>
    : null
        )}
         </Paper >
        )
    }
}

export default withContext(Leftpanel);
