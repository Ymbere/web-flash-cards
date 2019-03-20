import { retriveDecks } from "../../utils/API";
import { receive_deck } from "./DeckActions";

export function handleInitialData() {
    return (dispatch) => {
        const decks = retriveDecks()
        dispatch(receive_deck(decks))
    }
}
