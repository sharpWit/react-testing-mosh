import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class C4 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                C4
                {this.props.children}
            </div>
        )
    }
}
