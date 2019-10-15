import React, { Component, Fragment } from 'react';
import { Header, Footer} from '../Layouts/Index';
import Exercises from '../Exercises/Exercises'
import {muscles, exercises} from '../Store/Store'
import {CssBaseline} from '@material-ui/core'
import { Provider } from '../../Context';
class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    exercises,
    exercise: {}
  }
 
  }

  getExercisesByMuscle(){

    const groupExercises = muscles.reduce((exercises, category) =>({
      ...exercises,
      [category]: []
    }), {})
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const {muscles} = exercise
        
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
        return exercises
      }, groupExercises)
   )
  } 

handleCatagoriesSelect = category => 
this.setState({
category
})


handleExerciseSelect = id => 
  this.setState(({exercises}) => ({
    exercise: exercises.find(item => item.id === id),
    editMode: false
  }))


handleExerciseCreate = exercise => 
  this.setState(({exercises}) => ({
    exercises: [
      ...exercises,
      exercise
    ]
  }))


handleExerciseDelete = id =>
  this.setState(({exercises, exercise, editMode}) => ({
    exercises: exercises.filter(ex => ex.id !== id),
    editMode: exercise.id === id ? false : editMode,
    exercise: exercise.id === id ? {} : exercise
  }))
  


handleExerciseSelectEdit = id => 
  this.setState(({exercises}) => ({
    exercise: exercises.find(item => item.id === id),
    editMode: true
  }))

  handleExerciseEdit = exercise => 
  this.setState(({exercises}) => ({
    exercises: [...exercises.filter(item => item.id !== exercise.id),
    exercise
  ],
  exercise
  }))
getContext = () => ({
  muscles,
  ...this.state,
  onCreate: this.handleExerciseCreate,
  onDelete: this.handleExerciseDelete,
  onSelectEdit: this.handleExerciseSelectEdit,
  onEdit: this.handleExerciseEdit,
  onCategorySelect: this.handleCatagoriesSelect,
  musclesExercises: this.getExercisesByMuscle(),
  onSelect: this.handleExerciseSelect,
  
})
 
  render() {
    
    return (
    <Provider value={this.getContext()}>
      <Fragment>
        <CssBaseline/>
        <Header
        />
        <Exercises
        />
        <Footer
        />
      </Fragment>
    </Provider>
    

    );
  }
}

export default App;