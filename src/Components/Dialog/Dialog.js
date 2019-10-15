import React, { Fragment } from 'react';
import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {withContext } from '../../Context';
import Form from './Form'




class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.handleToggle = this.handleToggle.bind(this);

	}
	handleToggle = () => 
		this.setState({
			open: !this.state.open
		});
		
  handleFormSubmit = exercise => {
			this.handleToggle()
		
			this.props.onCreate(exercise)
		  }

	render() {
		const {open } = this.state,
		 {muscles} = this.props
		return (
				
				<Fragment>
				<Button variant="fab" mini onClick={this.handleToggle} color='secondary'>
					<Add />
				</Button>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle>Create a New exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please fil out the form below
						</DialogContentText>
						<Form
						muscles={muscles}
						onSubmit={this.handleFormSubmit}/>
					</DialogContent>
				</Dialog>
			</Fragment>
					
		);
	}
}

export default withContext(Dialogs);
