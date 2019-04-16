import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//Components
import NavBar from './NavBar';
import { handleInitialData } from '../redux/actions/Shared';

class QuizScreen extends Component {
    state = {
        arrayPosition: 0,
        showAnswer: 0,
        correctAnswers: 0,
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = ( deckID ) => {
        if (this.state.redirect) {
            return <Redirect to={`/deck/${deckID}`} />
        }
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    handleClickOption = (e) => {
        e.preventDefault()
        const text = e.target.value

        if (text === "yes") {
            this.setState((prevState) => ({
                arrayPosition: prevState.arrayPosition + 1,
                correctAnswers: prevState.correctAnswers + 1,
                showAnswer: 0
            }))

        } else if (text === "no") {

            this.setState((prevState) => ({
                arrayPosition: prevState.arrayPosition + 1,
                showAnswer: 0
            }))
        }
    }

    handleClickAnswer = (e) => {
        e.preventDefault()
        this.setState({
            showAnswer: 1
        })
    }

    renderCard = () => {
        const { cards, cardsNumber } = this.props
        const { arrayPosition, showAnswer } = this.state

        if (cards !== "Loading...") {
            return (
                <Fragment>
                    <NavBar/>
                    <h1>{arrayPosition + 1}/{cardsNumber}</h1>

                    <div className="card">
                        <h5 className="card-title">
                            { cards[arrayPosition].question }
                        </h5>

                        {showAnswer === 0 &&
                            <button onClick={this.handleClickAnswer}>
                                Show answer
                            </button>
                        }

                        {showAnswer === 1 &&
                            <Fragment>
                                <p>{cards[arrayPosition].answer}</p>
                                <button
                                    value="yes"
                                    className="btn btn-primary"
                                    onClick={this.handleClickOption}
                                >Yes</button>
                                <button
                                    value="no"
                                    className="btn btn-primary"
                                    onClick={this.handleClickOption}
                                >No</button>
                            </Fragment>
                        }

                    </div>
                </Fragment>
            )
        }
    }

    render () {
        const { cardsNumber, deckID } = this.props
        const { arrayPosition } = this.state

        return (
            <div>
                {this.renderRedirect(deckID)}
                {arrayPosition !== cardsNumber &&
                    this.renderCard()
                }
                {arrayPosition === cardsNumber &&
                    <Fragment>
                        <NavBar />
                        <h5>
                            Your result is
                            {this.state.correctAnswers} of {cardsNumber}
                        </h5>
                        <button
                            value="back"
                            className="btn btn-primary"
                            onClick={() => this.setRedirect()}
                        >
                            Go back to deck
                        </button>

                        <button
                            value="restart"
                            className="btn btn-primary"
                            onClick={() => this.setState(
                                { arrayPosition: 0, correctAnswers: 0}
                            )}
                        >
                            Restart quiz
                        </button>
                    </Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ decks }, ownProps) => {
    const deckID = ownProps.match.params.id
    const deck = decks.find(deck => deck.id.toString() === deckID)

    if (typeof(deck) !== "undefined") {
        return {
            cards: deck.cards,
            cardsNumber: deck.cards.length,
            deckID
        }
    } else {
        return {
            cards: "Loading..."
        }
    }
}

export default withRouter(connect(mapStateToProps)(QuizScreen))
