import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DeckCard extends Component {
    render() {
        const { deck } = this.props
        const { title, cards, id } = deck
        return (
            <div className="card">
                <div className="card-body">
                    <Link to={`/deck/${id}`}>
                        <h5 className="card-title">{title}</h5>
                    </Link>
                    <p className="card-text">{cards.length} cards</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ decks }, { id }) => {
    const deck = decks.find(c => c.id === id)
    return {
        deck
    }
}


export default connect(mapStateToProps)(DeckCard)
