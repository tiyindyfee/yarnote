import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import marked from 'marked'

class Note extends React.Component {
    render() {
        let url = this.props.url
        let isImage = (url.includes('.jpg') || url.includes('.png') || url.includes('.gif'))

        return <div className="column is-one-quarter-desktop is-one-third-tablet">
                    <div className="card">
                        <div className="card-image">
                            <div className="notification is-primary" style={isImage ? {padding: '0px'} : {}}>
                                <figure className="image is-4by3" style={isImage ? {background:'url(' + url + ')', backgroundSize: 'cover', paddingTop: '72%'} : {}}>
                                    {isImage || ! url ? <div className="note-link">&nbsp;</div> : <a href={url} target="_blank" className="note-link">Visit Link</a>}
                                </figure>
                            </div>
                        </div>
                        <div className="card-content" onClick={() => browserHistory.push('/notes/' + this.props.index + '/edit')}>
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4 text-truncate">{this.props.title}</p>
                                </div>
                            </div>

                            <div className="content">
                                <p className="text-truncate">{this.props.body.split('\n').shift()}</p>
                                <small>Updated {moment(this.props.updated_at).format('MM/DD/YYYY')}</small>
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps)(Note)