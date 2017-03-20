import React from 'react'
import store from 'store'

window.store = store

class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.getNotes = this.getNotes.bind(this)
        this.saveNote = this.saveNote.bind(this)

        this.state = {
            currentView: 'list notes',
            notes: [],
            title: '',
            body: '',
            url: '',
        }
    }

    componentDidMount() {
        this.getNotes()
    }

    getNotes() {
        let notes = store.get('notes') || []
        this.setState({notes: notes})
    }

    saveNote() {
        let notes = store.get('notes') || []

        notes.push({
            title: this.state.title,
            body: this.state.body,
            url: this.state.url
        })

        store.set('notes', notes)

        this.setState({currentView: 'list notes'})

        this.getNotes()
    }

    render() {
        // List Notes
        if (this.state.currentView === 'list notes') {
            let notes = this.state.notes.map((note, key) => <p key={key}><strong>{note.title}</strong><br/>{note.body}</p>)

            if (notes.length === 0) {
                notes = <p>No notes yet.</p>
            }
            
            return <div className="content">
                <h1>Notes</h1>
                <button type="button" className="button" onClick={() => this.setState({currentView: 'add note'})}>Add Note</button>
                {notes}
            </div>
        }

        // Add Note
        else {
            return <div>
                <div className="field">
                    <div className="control">
                        <input placeholder="Title" className="input" type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <textarea placeholder="Body" className="textarea" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})}></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input placeholder="URL" className="input" type="text" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button type="button" className="button is-success is-fullwidth" onClick={this.saveNote}><span>Save</span> <span className="icon is-small"><i className="fa fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
        }
        
    }
}

export default Notes