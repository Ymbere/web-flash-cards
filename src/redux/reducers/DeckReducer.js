import {
    RECEIVE_DECK,
    ADD_DECK,
    ADD_CARD,
    REMOVE_DECK
} from '../actions/DeckActions'

export default function decks (state=[], action) {
    switch(action.type) {
        case RECEIVE_DECK :
            return action.deck

        case ADD_DECK :
            return [
                ...state,
                action.deck
            ]

        case REMOVE_DECK :
            return state.filter(deck => deck.id !== action.deckID)

        case ADD_CARD :
            return state.map((deck) => {
                if (deck.id === action.card.deck_id) {
                    return {
                        ...deck,
                        cards: [...deck.cards, action.card]
                    }
                }
                return deck
            })

        default :
            return state
    }
}
