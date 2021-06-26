import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import './Toolbar.css'

const Toolbar=props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={ props.drawerClickHandler } />
            </div>
            <div className="toolbar__logo">
                <a href="/">THE LOGO</a>
            </div>

            <input className="search-bar"
                placeholder={'Search for resources, services and documentation'}
            />
 
            <div className="toolbar_navigation-item">
                <ul>
                    <li>
                        <a href="/">
                            US West Phone
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar
