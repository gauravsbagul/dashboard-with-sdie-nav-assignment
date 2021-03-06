import React, { Component } from 'react'

import Toolbar from './components/Toolbar/ToolBar.js'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import {Home} from './components/Home/Home'
class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
     this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
     

    if (this.state.sideDrawerOpen) {
      backdrop=<Backdrop click={ this.backdropClickHandler } />
     }
    return (
      <div style={{ height: '100vh'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={ this.state.sideDrawerOpen }/>
        { backdrop }
        
        <Home />

      </div>
    )
  }
}

export default App