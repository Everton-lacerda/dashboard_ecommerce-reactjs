import React, { Component } from 'react';
import BarraTopo from './barraTopo'
import Menu from './menu'



// import { Container } from './styles';

export default class Dashboard extends Component {
  render() {
    return (
        <div className="flex horizontal full-height">
            <div className="flex vertical ">
                <Menu history={this.props.history}/>
            </div>
            <div className="flex vertical full-width ">
                <div className="flex horizontal full-width">
                    <BarraTopo />
                </div>
                <div className="flex full-height">
                    {this.props.children}
                </div>
            </div>
        </div>
    )
  }
}
