import React from 'react'
import BuyFunction from './BuyFunction'
import BuyClass from './BuyClass'

export default function Buy({ name }) {
    return (
        <div className='badge-wrapper'>
            <BuyFunction name={name} />
            <BuyClass name={name} />
        </div>
    )
}
