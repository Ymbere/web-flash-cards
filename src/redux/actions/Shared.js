import { retriveDecks, retriveOneDeck } from "../../utils/API";
import { receive_deck } from "./DeckActions";

export function handleInitialData() {
    return (dispatch) => {
        retriveDecks()
            .then((decks) => dispatch(receive_deck(decks)))
    }
}

export function handleReturnOneDeck(deck_id) {
    return (dispatch) => {
        const deck = retriveOneDeck(deck_id)
        dispatch(receive_deck(deck))
    }
}
