import {
    RECEIVE_DECK,
    ADD_DECK
} from '../actions/DeckActions'

export default function decks (state=[], action) {
    switch(action.type) {
        case RECEIVE_DECK :
            return action.deck

        case ADD_DECK :
            let newState = state
            newState = newState.concat(action.deck)
            return newState

        default :
            return state
    }
}
