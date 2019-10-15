import React from 'react';
import { TextField,
	withStyles, 
	MenuItem, 
	FormControl, 
	Select, 
	InputLabel, 
	Button } from '@material-ui/core';

const style = (theme) => ({
	FormControl: {
		width: 250
	},

});

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getIntState()

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getIntState() {
		const { exercise } = this.props

		return exercise ? exercise : {
			title: '',
			description: '',
			muscles: ''

		}
	}

	static getDrivedStateFromProps({ exercise }) {
		return exercise || null
	  }

	handleChange = name => ({ target: { value } }) =>
		this.setState({
			[name]: value
		});

	handleSubmit = () => {
		this.props.onSubmit({
			id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
			...this.state
		});
		this.setState(this.getInitState)
		
	};

	render() {
		const { title, description, muscles } = this.state;
		const { classes } = this.props;
		const { exercise, muscles: categories } = this.props;

		return (
			<form>
				<TextField
					label="Title"
					value={title}
					onChange={this.handleChange('title')}
					margin="normal"
					className={classes.FormControl}
				/>
				<br />
				<FormControl className={classes.FormControl}>
					<InputLabel htmlFor="muscles">
					Muscles
					</InputLabel>
					<Select value={muscles} onChange={this.handleChange('muscles')}>
						{categories.map( category => 
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						)}
					</Select>
				</FormControl>
				<br />
				<TextField
					multiline
					rows="4"
					label="Description"
					value={description}
					onChange={this.handleChange('description')}
					margin="normal"
					className={classes.FormControl}
				/>

				<br />
				<Button 
				color="primary" 
				variant="raised" 
				onClick={this.handleSubmit}>
					{ exercise ? 'Edit' : 'Create'}
				</Button>
			</form>
		);
	}
}

Form.propTypes = {
	classes: FormControl
};

export default withStyles(style)(Form);
