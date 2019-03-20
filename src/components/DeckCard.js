import React, { Component } from 'react'

class DeckCard extends Component {
    render() {
        const { title, cardNumber } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{cardNumber} cards</p>
                </div>
            </div>
        )
    }
}

export default DeckCard
