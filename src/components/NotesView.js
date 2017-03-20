import React from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import Search from './Search'
import Note from './Note'

class NotesView extends React.Component {
    render() {
        let notes = this.props.redux.notes
            .filter((note) => {
                return (
                    this.props.redux.searchTerm === '' ||
                    note.title.includes(this.props.redux.searchTerm) ||
                    note.body.includes(this.props.redux.searchTerm) ||
                    note.tags.includes(this.props.redux.searchTerm)
                )
            })
            .map((note, key) => <Note key={key} index={key} {...note} />)

        if (notes.length === 0) {
            notes = <div className="column is-full">
                <hr/>
                <h2>No search results.</h2>
            </div>
        }
        
        return <Layout>
            <div className="column is-full">
                <Search />
            </div>
            {notes}
        </Layout>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(NotesView)