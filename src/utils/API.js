import AsyncStorage from '@callstack/async-storage';

const meuStorage = "meuStorage:key"

export async function retriveDecks() {
    const stateCheck = await AsyncStorage.getItem(meuStorage)
    if (stateCheck === null) {
        localStorage.setItem(meuStorage, JSON.stringify([]))
    }
    const decks = await AsyncStorage.getItem(meuStorage)
    return JSON.parse(decks)
}

export function retriveOneDeck(deck_id) {
    const decks = retriveDecks()
    return decks.find(deck => deck.id.toString() === deck_id)
}

export async function addDeckToStorage(deck) {
    const newState = await addItem(deck)
    localStorage.setItem(meuStorage, JSON.stringify(newState))
}

export async function addCardToStorage(card) {
    const newState = await addCardToDeck(card)
    localStorage.setItem(meuStorage, JSON.stringify(newState))
}

async function addCardToDeck(card) {
    const state = await retriveDecks()
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

async function addItem(item) {
    const result = await retriveDecks()
    return result.concat(item)
}
