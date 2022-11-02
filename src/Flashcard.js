import React, { useState, useEffect, useRef } from 'react'
import './FlashCardApp.css'

export default function Flashcard({ flashcard }) {
    const  [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        /* Set max height for flashcards that adjust acording to page size */
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer,
         flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
       }, [])

    return (
    /* Flashcard formating as well as flip effect implementation */
    <div 
    className={`card ${flip ? 'flip' : ''}`}
    style={{ height: height }}
    onClick={() => setFlip(!flip)}
    >
        <div className="front" ref={frontEl}>
            {flashcard.question}
            <div className="flashcard-options">
            </div>
        </div>
        <div className="back" ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}
