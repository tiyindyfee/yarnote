// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import NotesView from './components/NotesView'
import ShowView from './components/ShowView'
import EditView from './components/EditView'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={NotesView} />
                <Route path="/notes/create" component={EditView} />
                <Route path="/notes/:index" component={ShowView} />
                <Route path="/notes/:index/edit" component={EditView} />
            </Router>
        </Provider>
    }
}

export default Routes