
const meuStorage = "meuStorage"

export function retriveDecks() {
    const decks = localStorage.getItem(meuStorage)
    return JSON.parse(decks)
}

export function addDeckToStorage(deck) {
    const newState = addItem(deck)
    localStorage.setItem(meuStorage, JSON.stringify(newState))
}

function addItem(item) {
    const stateCheck = retriveDecks()
    if (stateCheck === null) {
        localStorage.setItem(meuStorage, JSON.stringify([]))
    }
    const state = retriveDecks()
    state.push(item)
    return state
}
