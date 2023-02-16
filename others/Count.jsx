import React, { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)


    function increment() {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1)
            console.log(count);
        }, 2000)
    }

    function decrement() {
        setTimeout(() => {
            setCount(count - 1)
        }, 2000)
    }

    return (
        <div className='counter'>
            <button onClick={decrement} className='bg-info'>-</button>
            <p className='count'>{count}</p>
            <button onClick={increment} className='bg-success'>+</button>
        </div>
    )
}
