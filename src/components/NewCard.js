import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddCard } from '../redux/actions/DeckActions';
import NavBar from './NavBar';
import { Redirect } from "react-router-dom";

class Newcard extends Component {
    state = {
        question: '',
        answer: '',
        deckID: '',
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

    handleChangeInput = (e) => {
        e.preventDefault()
        const field = e.target.id
        const text = e.target.value

        this.setState({
            [field]: text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { question, answer } = this.state
        const parentID = this.props.match.params.id

        dispatch(handleAddCard({
            question,
            answer,
            id: Date.now(),
            deck_id: parseInt(parentID)
        }))

        this.setRedirect()

        this.setState(() => ({
            question: '',
            answer: ''
        }))
    }

    componentDidMount() {
        const deckID = this.props.match.params.id
        this.setState({
            deckID
        })
    }

    checkFields = () => {
        const { question, answer } = this.state
        if ( question === "" || answer === "") {
            return 1
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderRedirect(this.state.deckID)}
                <NavBar />
                <form onSubmit={this.handleSubmit}>
                    <input id="question"
                        placeholder="Digite a pergunta do card"
                        onChange={this.handleChangeInput}
                        value={this.state.question}
                    /><br/>
                    <input id="answer"
                        placeholder="Digite a resposta para o card"
                        onChange={this.handleChangeInput}
                        value={this.state.answer}
                    />
                    <br/>
                    <button disabled={this.checkFields()}>Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default connect()(Newcard)
