import React from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'

class ShowView extends React.Component {
    render() {
        return <Layout>
            <div className="column">
                <h1>Now Showing Note {this.props.params.id}</h1>
            </div>
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
export default connect(mapStateToProps)(ShowView)