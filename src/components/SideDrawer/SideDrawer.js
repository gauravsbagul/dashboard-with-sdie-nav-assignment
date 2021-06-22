import React from 'react'

import './SideDrawer.css'

const SideDrawer=props => {
console.log('Log: ~> file: SideDrawer.js ~> line 6 ~> props', props)

  
 let className = props.show ?  'side-drawer open' : 'side-drawer'

  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="/">SideDrawer option one</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  
  )
}

export default SideDrawer
