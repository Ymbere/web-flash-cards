import React, { Component } from 'react'


class Newcard extends Component {
    render() {
        return (
            <form>
                <input placeholder="Digite a pergunta do card"></input>
                <input placeholder="Digite a resposta para o card"></input>

                <button>Submit</button>
            </form>
        )
    }
}


export default Newcard
