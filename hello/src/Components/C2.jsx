import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class C2 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                C2
                {this.props.children}
            </div>
        )
    }
}
