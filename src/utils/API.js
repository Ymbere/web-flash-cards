
export function retriveDecks() {
    const decks = localStorage.getItem("meuStorage")
    return JSON.parse(decks)
}


export function addDeckToStorage(deck) {
    const newState = addItem(deck)
    localStorage.setItem("meuStorage", JSON.stringify(newState))
}


function addItem(item) {
    const state = JSON.parse(retriveDecks())
    console.log(state)
    return state
}
