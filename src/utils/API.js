
const meuStorage = "meuStorage"

export function retriveDecks() {
    const stateCheck = JSON.parse(localStorage.getItem(meuStorage))

    if (stateCheck === null) {
        localStorage.setItem(meuStorage, JSON.stringify([]))
    }

    const decks = localStorage.getItem(meuStorage)
    return JSON.parse(decks)
}

export function retriveOneDeck(deck_id) {
    const decks = retriveDecks()
    return decks.find(deck => deck.id.toString() === deck_id)
}

export function addDeckToStorage(deck) {
    const newState = addItem(deck)
    localStorage.setItem(meuStorage, JSON.stringify(newState))
}

export function addCardToStorage(card) {
    const newState = addCardToDeck(card)
    localStorage.setItem(meuStorage, JSON.stringify(newState))
}

function addCardToDeck(card) {
    const state = retriveDecks()
    return state.map((deck) => {
        if (deck.id === card.deck_id) {
            return {
                ...deck,
                cards: [...deck.cards, card]
            }
        }
        return deck
    })
}

function addItem(item) {
    const state = retriveDecks()
    state.push(item)
    return state
}
