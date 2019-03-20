import React, { Component } from 'react'



class CardMainPage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ruby</h5>
                    <p className="card-text">2 Cards</p>

                    <div className="btn-group">
                        <button className="btn btn-primary">Add card</button>
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>

                </div>
            </div>
        )
    }
}


export default CardMainPage
