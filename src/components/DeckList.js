import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeckCard from './DeckCard';
import { handleInitialData } from '../redux/actions/Shared';
import NavBar from './NavBar';

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { decks } = this.props

        return (
            <div>
                <NavBar />
                {decks !== null &&
                    decks.map((deck) => (
                        <DeckCard
                            key={deck.id}
                            title={deck.title}
                            cardNumber={deck.cards.length}
                        />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)
