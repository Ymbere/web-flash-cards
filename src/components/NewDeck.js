import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddDeck } from '../redux/actions/DeckActions';
import NavBar from './NavBar';


class NewDeck extends Component {
    state = {
        title: "",
        id: Date.now(),
        cards: [],
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

        dispatch(handleAddDeck(
            this.state
        ))

       this.setState(() => ({
           title: "",
           id: Date.now()
       }))
    }


    render() {
        return (
            <Fragment>
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
