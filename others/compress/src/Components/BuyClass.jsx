import React, { Component } from 'react'

export default class BuyClass extends Component {

    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    showAlert() {
        alert(this.props.name)
    }
    handleClick() {
        setTimeout(this.showAlert, 2000)
    }


    render() {
        return (
            <div>
                <span className='badge' onClick={this.handleClick}>Buy</span>
                <p>class</p>
            </div>
        )
    }
}
