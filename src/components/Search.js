import React from 'react'
import { connect } from 'react-redux'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this)

        this.state = {
            searchTerm: ''
        }
    }

    search(e) {
        //if (e.key === 'Enter') {
            this.props.dispatch({type: 'NOTE_SEARCH', body: this.state.searchTerm})
        //}
    }

    render() {
        return <div className="field">
                    <p className="control has-icon">
                        <input className="input is-danger" type="search" placeholder="Search notes..." value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} onKeyPress={this.search} />
                        <span className="icon is-small">
                            <i className="fa fa-search"></i>
                        </span>
                    </p>
                </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Search)