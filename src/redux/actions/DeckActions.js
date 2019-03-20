import { addDeckToStorage } from "../../utils/API";

export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'


export function receive_deck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}


function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}


export function handleAddDeck (deck) {
    return (dispatch) => {
        dispatch(addDeck(deck))
        addDeckToStorage(deck)
    }
}
