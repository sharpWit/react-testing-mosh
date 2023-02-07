import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class D2 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                D2
                {this.props.children}
            </div>
        )
    }
}
