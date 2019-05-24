import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeckCard from './DeckCard';
import { handleInitialData } from '../redux/actions/Shared';
import NavBar from './NavBar';
import EmptyDeck from './EmptyDecks';


function RenderEmptyScreen() {
    return (
        <EmptyDeck />
    )
}

function RenderDeckList(props) {
    const decks = props.decks

    return (
        <>
            {decks !== null &&
                decks.map((deck) => (
                    <DeckCard
                        key={deck.id}
                        id={deck.id}
                    />
                ))
            }
        </>
    )
}


function RenderScreen(props) {
    const decks = props.decks

    if (decks.length === 0) {
        return (
            <>
                <NavBar />
                <RenderEmptyScreen />
            </>
        )
    } else {
        return (
            <>
                <NavBar />
                <RenderDeckList decks={decks} />
            </>
        )
    }
}

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { decks } = this.props

        return (
            <RenderScreen decks={decks} />
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)
