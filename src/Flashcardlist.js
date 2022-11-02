import React from 'react'
import Flashcard from './Flashcard'


export default function Flashcardlist({ flashcards }) {
  return (
    /* flash card list containing all flashcards A-z and number 0-9 */
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}     
    </div>
  )
}
