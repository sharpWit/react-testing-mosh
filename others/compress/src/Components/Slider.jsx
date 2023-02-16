import React, { useState, useEffect } from 'react'
import Arrrow from './Arrrow'
import Card from './Card'

export default function Slider() {
    const [heroes, setHeroes] = useState([])
    const [courser, setCourser] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/heroes')
            .then(response => response.json())
            .then(heroes => setHeroes(heroes))
    }, [])

    function handleNext() {
        const current = courser + 1 < heroes.length ? courser + 1 : 0;

        setCourser(current);
    }

    function handlePrev() {
        const current = courser - 1 < 0 ? (heroes.length - 1) : courser - 1;

        setCourser(current);
    }

    return (
        <div className="slide-container">
            <div className="wrapper">
                {!heroes.length ?
                    <div className="loader">Loading ...!</div> :
                    <>
                        <Arrrow direction='prev' handleClick={handlePrev} />
                        <Card hero={heroes[courser]} />
                        <Arrrow direction='next' handleClick={handleNext} />
                    </>}
            </div>
        </div>
    )
}
