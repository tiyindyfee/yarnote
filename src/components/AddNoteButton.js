import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class AddNoteButton extends React.Component {
    render() {
        return <button type="button" id="addNote" title="Add Note" className="button is-primary" onClick={() => browserHistory.push('/notes/create')}><i className="fa fa-plus"></i></button>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(AddNoteButton)