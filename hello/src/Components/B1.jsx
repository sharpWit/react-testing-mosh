import React, { Component } from 'react'
import color from '../Services/randomColor'


export default class B1 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                B1
                {this.props.children}
            </div>
        )
    }
}
