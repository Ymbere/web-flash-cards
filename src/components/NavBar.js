import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link to='/' className="nav-item nav-link active" arial-selected="true">Deck List</Link>
                    <Link to='/create' className="nav-item nav-link active" arial-selected="false">Create Deck</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar
