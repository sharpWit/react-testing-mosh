import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class B2 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                B2
                {this.props.children}
            </div>
        )
    }
}
