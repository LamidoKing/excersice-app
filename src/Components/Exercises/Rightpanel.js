import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core';
import { withContext } from '../../Context';

import Form from '../Dialog/Form'
class Rightpanel extends React.Component {

    render(){
        const {
            exercise,
            exercise: {
            id,
            title = 'Welcome!',
            description = 'Please select an exercise from the list on the left.'
          },
           editMode, 
           muscles, 
           onEdit,
           paper
        } = this.props
        return(
            <Paper className={paper}>
            {editMode 
            ? <Form
            key={id}
            muscles={muscles}
            exercise={exercise}
            onSubmit={onEdit}/> 
            : <Fragment>
                 <Typography 
                 variant='display1' color='secondary'>
                {title}
            </Typography>
            <Typography variant='subheading' style={{marginTop: 20}}>
            {description}
            </Typography>
            </Fragment>
        }
           
            </Paper >
        )
    }
}

export default withContext(Rightpanel);