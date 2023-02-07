import React, { Component } from 'react'
import color from "../Services/randomColor";
export default class A extends Component {
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                A
                {this.props.children}
            </div>
        )
    }
}
