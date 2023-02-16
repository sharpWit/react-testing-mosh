import React from 'react'

export default function BuyBtn({ name }) {

    function showAlert() {
        alert(name)
    }
    function handleClick() {
        setTimeout(showAlert, 2000)
    }
    return (
        <div className='buy-btn'>
            <span className='badge' onClick={handleClick}>Buy</span>
        </div>
    )
}
