import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddDeck } from '../redux/actions/DeckActions';
import { Redirect } from "react-router-dom";

//Components
import NavBar from './NavBar';

class NewDeck extends Component {
    state = {
        title: "",
        cards: [],
        id: 0,
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/deck/${this.state.id}`} />
        }
    }

    handleInput = (e) => {
        e.preventDefault()
        const text = e.target.value

        this.setState({
            title: text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { title, cards } = this.state
        const id = Date.now()

        this.setState({
            id: id
        })

        dispatch(handleAddDeck({
            title,
            id,
            cards
        }))

        this.setRedirect()

        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <Fragment>
                {this.renderRedirect()}
                <NavBar />
                <form onSubmit={this.handleSubmit}>
                    <h6>Title for the new deck</h6>
                    <div></div>
                    <input
                        placeholder="Digite o titulo para o deck"
                        value={this.state.title}
                        onChange={this.handleInput}
                    ></input>

                    <button>Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default connect()(NewDeck)
