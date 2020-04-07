import React, { Component } from 'react';

import ListItems from "./listItems";

export default class Menu extends Component {
    state = { open: true }
    tootleOpen = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state
        return (
            <div className={`menu full-height ${ open ? "menu-open" : "" }`}>
                <div className={`item-top flex ${ open ? "flex-end" : "flex-center" }`} onClick={() => this.tootleOpen()}>
                    {(<i className={`fas fa-arrow-${ open ? 'left' : 'right'}`}></i>)}
                    {/* {
                       open ? (<i className="fas fa-arrow-left"></i> ): <i className="fas fa-arrow-right"></i>
                    } */}
                </div>
                <hr />
                <ListItems open={open} history={this.props.history} />
            </div>
        );
    }
}
