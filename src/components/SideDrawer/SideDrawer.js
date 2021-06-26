import React from 'react'

import './SideDrawer.css'

const SideDrawer=props => {
  console.log('Log: ~> file: SideDrawer.js ~> line 6 ~> props', props)


  let className=props.show? 'side-drawer open':'side-drawer'

  const sideBarOptions=[{ name: 'Compute', }, { name: 'Block Storage' }, { name: 'Object Storage' }, { name: 'File' }]

  return (
    <nav className={ className }>
      <ul>
        { sideBarOptions.map((item) => {
          return (
            <li>
              <a href="/">{ item.name }</a>
              <span>-></span>
            </li>
          )
        }) }
      </ul>
    </nav>

  )
}

export default SideDrawer
