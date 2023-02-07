import React, { Component } from 'react'
import color from "../Services/randomColor";


export default class D1 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                D1
                {this.props.children}
            </div>
        )
    }
}
