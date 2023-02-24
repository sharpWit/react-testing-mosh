import React from 'react'
import withControlledInput from './withControlledInput'

function TextInput({ value, handleChanges }) {
    return (
        <input type="text"
            value={value}
            onChange={(e) => handleChanges(e.target.value)} />
    )
}

export default withControlledInput(TextInput)
