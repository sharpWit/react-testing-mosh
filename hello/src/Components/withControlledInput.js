import React, { Component } from 'react'

export default function withControlledInput(WrappedComponent) {
    return class extends Component {
        state = {
            input: 'Hello'
        }

        handleChanges(newValue) {
            this.setState({
                input: newValue
            })
        }
        render() {
            const { foo, ...extraProps } = this.props
            return (
                <WrappedComponent
                    {...extraProps}
                    value={this.state.input}
                    handleChanges={this.handleChanges.bind(this)} />
            )
        }
    }
}



