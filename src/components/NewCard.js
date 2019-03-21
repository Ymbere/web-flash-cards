import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddCard } from '../redux/actions/DeckActions';
import NavBar from './NavBar';


class Newcard extends Component {
    state = {
        question: '',
        answer: ''
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

        this.setState(() => ({
            question: '',
            answer: ''
        }))
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <form onSubmit={this.handleSubmit}>
                    <input id="question" placeholder="Digite a pergunta do card" onChange={this.handleChangeInput} value={this.state.question} /><br/>
                    <input id="answer" placeholder="Digite a resposta para o card" onChange={this.handleChangeInput} value={this.state.answer} />
                    <br/>
                    <button>Submit</button>
                </form>
            </Fragment>
        )
    }
}


export default connect()(Newcard)
