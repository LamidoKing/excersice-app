import React from 'react';
import { Tabs, AppBar, withWidth } from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import { withContext } from '../../Context';



class Footer extends React.Component {

  getMuscle(){
    const {muscles} = this.props
    return muscles.map(muscle => 
        <Tab label={muscle} />
    )
  }

  onIndexSelect = (e, index) => {
     const {onCategorySelect, muscles} = this.props
     return onCategorySelect(index === 0 ? '' : muscles[index - 1])
}
     getIndex = () => { 
      const {category, muscles} = this.props
      return category ? muscles.findIndex(group =>
      group === category) + 1 : 0
}
    render() {
      const { width} = this.props
        return (
            <AppBar position='static'>
            <Tabs
              value={this.getIndex()}
              onChange={this.onIndexSelect}
              indicatorColor='secondary'
              textColor='secondary'
              centered={width !== 'xs'}
              scrollable={width === 'xs'}
            >
            <Tab label="All" />
            {this.getMuscle()}
            </Tabs>
          </AppBar>
        )
    }
}

export default withContext(withWidth()(Footer));