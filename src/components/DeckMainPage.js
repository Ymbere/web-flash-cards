import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { handleInitialData } from '../redux/actions/Shared';
import NavBar from './NavBar';



class CardMainPage extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { title, cardNumber, id } = this.props
        return (
            <div className="card">
                <NavBar />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{cardNumber} Cards</p>

                    <div className="btn-group">
                            <button className="btn btn-primary">
                                <Link to={`/deck/${id}/create_card`}>Add Card</Link>
                            </button>
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>

                </div>
            </div>
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
