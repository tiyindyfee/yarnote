import React from 'react'
import AddNoteButton from './AddNoteButton'

class Layout extends React.Component {
    render() {
        return <div>
            <section className="hero is-danger is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title logo">
                            YÄRNOTES<sup>&trade;</sup>
                        </h1>
                        <h2 className="subtitle">
                            A Notes App Powered By Yarn Node Packages
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <AddNoteButton />
                <div className="container">
                    <div className="columns is-multiline content">
                        {this.props.children}
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>YÄRNOTES<sup>&trade;</sup></strong> by <a href="https://twitter.com/thinksaydo">Collin Schneider</a>
                        </p>
                        <p>
                            <a className="icon" href="https://github.com/tiyindyfee/yarnotes">
                                <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    }
}

export default Layout