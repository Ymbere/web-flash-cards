import { addDeckToStorage, addCardToStorage } from "../../utils/API";

export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK     = 'ADD_DECK'
export const ADD_CARD     = 'ADD_CARD'
export const REMOVE_DECK  = 'REMOVE_DECK'

export function receive_deck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}

export function addCard ( card ) {
    return {
        type: ADD_CARD,
        card
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck
    }
}

export function handleAddDeck (deck) {
    return (dispatch) => {
        dispatch(addDeck(deck))
        addDeckToStorage(deck)
    }
}

export function handleAddCard (card) {
    return (dispatch) => {
        dispatch(addCard(card))
        addCardToStorage(card)
    }
}
