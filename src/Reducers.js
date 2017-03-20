// Load Redux
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { default as storeJS } from 'store'

// Initial shared state
const initialSharedState = {
    notes: [],
    searchTerm: ''
}

let notes = storeJS.get('notes') || []

// Reducers
function state(state = initialSharedState, action = {}) {
    switch (action.type) {

        case 'NOTES':
            return { ...state, notes: notes }
        case 'NOTE_CREATE':
            notes.push(action.body)
            storeJS.set('notes', notes)
            return { ...state, notes: notes }
        case 'NOTE_UPDATE':
            notes[action.index] = action.body
            storeJS.set('notes', notes)
            return { ...state, notes: notes }
        case 'NOTE_DELETE':
            notes = notes.splice(action.index, 1)
            storeJS.set('notes', notes)
            return { ...state, notes: notes }
        case 'NOTE_SEARCH':
            return { ...state, searchTerm: action.body }
        
        // No valid action.type was given
        default:
            return state
    }
}

// Combine reducers into a single store
const store = createStore(
  combineReducers({
    state: state,
    routing: routerReducer
  })
)

// Pre-fill data from store.js
store.dispatch({type: 'NOTES'})

export default store