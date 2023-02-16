import React, { useState, useEffect } from 'react'
import BuyBtn from './BuyBtn'
import Count from './Count'
import Max from './Max'


export default function Buy({ name, id }) {
    const [max, setMax] = useState(0)

    useEffect(() => {
        const fethMax = setInterval(() => {
            fetch(`http://localhost:3001/restricts?hero_id=${id}`)
                .then(response => response.json())
                .then(restrict => {
                    setMax(restrict[0].max)
                })
        }, 2000)


        return () => clearInterval(fethMax)

    }, [id])

    return (
        <>
            <div className='buy-wrapper'>
                <BuyBtn name={name} />
                <div>
                    <Max max={max} />
                    <Count />
                </div>
            </div>
        </>
    )
}
