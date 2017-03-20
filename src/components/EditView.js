import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import moment from 'moment'
import Layout from './Layout'

const now = moment().format('YYYY-MM-DD HH:mm:ss')

class EditView extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)

        this.state = {
            title: '',
            body: '',
            url: '',
            tags: '',
            created_at: now,
            updated_at: now,
        }
    }

    componentWillMount() {
        if (this.props.params.index >= 0) {
            let note = this.props.redux.notes[this.props.params.index]
            note.updated_at = now
            this.setState(note)
        }
    }

    save() {
        if ( ! this.props.params.index) {
            this.props.dispatch({type: 'NOTE_CREATE', body: this.state})
        }
        else {
            this.props.dispatch({type: 'NOTE_UPDATE', index: this.props.params.index, body: this.state})
        }
        
        browserHistory.push('/')
    }

    render() {
        return <Layout>
            <div className="column content">
                <h1>{this.props.params.index ? 'Editing Note' : 'Add Note'}</h1>
                <div className="field">
                    <label className="label" htmlFor="title">Title</label>
                    <div className="control">
                        <input className="input" type="text" id="title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="body">Note</label>
                    <div className="control">
                        <textarea className="textarea" id="body" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})}></textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="url">URL</label>
                    <div className="control">
                        <input className="input" type="text" id="url" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="tags">Tags</label>
                    <div className="control">
                        <input className="input" type="text" id="tags" value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button type="button" className="button is-success is-fullwidth" onClick={this.save}><span>Save</span> <span className="icon is-small"><i className="fa fa-arrow-right"></i></span></button>
                    </div>
                </div>
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
export default connect(mapStateToProps)(EditView)