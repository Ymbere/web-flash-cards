import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { handleInitialData } from '../redux/actions/Shared';
import NavBar from './NavBar';
import { handleDeleteDeck } from '../redux/actions/DeckActions';
import { Redirect } from "react-router-dom";
import { removeDeckFromStorage } from '../utils/API';

class CardMainPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps !== prevState) {
            this.props.dispatch(handleInitialData())
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    handleDeleteDeck = (event) => {
        event.preventDefault()

        const { dispatch } = this.props
        const deckID = this.props.id

        dispatch(handleDeleteDeck(deckID))

        removeDeckFromStorage(deckID)
            .then(() => this.setState({
                redirect: true
            }))
    }

    renderDeckMainPage = ( title, cardNumber, id ) => {

        return (
            <div className="card">
                {this.renderRedirect()}
                <NavBar />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{cardNumber} Cards</p>

                    <div className="btn-group">
                        <button className="btn btn-primary">
                            <Link to={`/deck/${id}/create_card`}>Add Card</Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link to={`/deck/${id}/cards/quiz`}>Start Quiz</Link>
                        </button>
                        <button className="btn btn-primary" onClick={this.handleDeleteDeck}>
                            Delete the deck
                        </button>
                    </div>

                </div>
            </div>
        )
    }

    render() {
        const { title, cardNumber, id } = this.props

        return (
            this.renderDeckMainPage(title, cardNumber, id)
        )
    }
}

const mapStateToProps = ({ decks }, ownProps) => {
    const deckID = ownProps.match.params.id
    const deck = decks.find(deck => deck.id.toString() === deckID)

    if (typeof(deck) !== "undefined") {
        return {
            title: deck.title,
            cardNumber: deck.cards.length,
            id: deck.id
        }
    } else {
        return {
            title: "Loading...",
            cardNumber: "Loading..."
        }
    }
}

export default withRouter(connect(mapStateToProps)(CardMainPage))
