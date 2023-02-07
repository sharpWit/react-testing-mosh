import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class C1 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                C1
                {this.props.children}
            </div>
        )
    }
}
