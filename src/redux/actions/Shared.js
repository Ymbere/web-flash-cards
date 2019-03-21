import { retriveDecks, retriveOneDeck } from "../../utils/API";
import { receive_deck } from "./DeckActions";

export function handleInitialData() {
    return (dispatch) => {
        const decks = retriveDecks()
        dispatch(receive_deck(decks))
    }
}


export function handleReturnOneDeck(deck_id) {
    return (dispatch) => {
        const deck = retriveOneDeck(deck_id)
        dispatch(receive_deck(deck))
    }
}
