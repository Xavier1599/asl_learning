import React, { useState, useEffect } from 'react';
import Flashcardlist from './Flashcardlist';
import './FlashCardApp';
import axios from 'axios';
import './FlashCardApp.css'
import './components/Header'

function FlashCardApp() {
 const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

useEffect(() => {
  axios.get('https://opentdb.com/api.php?amount=10&category=11')
  .then(res => {
    setFlashcards(res.data.results.map((questionItem, index) =>{
      const answer = decodeString(questionItem.correct_answer)
      const options = [...questionItem.incorrect_answers.map(a => decodeString(a)),
         answer]
      return { 
        id: `${index}-${Date.now}`,
        question: decodeString(questionItem.question),
        answer: questionItem.correct_answer,
        options: options.sort(() => Math.random() - .5)
      }
    }))
  })
}, [])

function decodeString(str) {
  const textArea = document.createElement('textarea')
  textArea.innerHTML= str
  return textArea.value
}



  return (
   <div className="container">
      <Flashcardlist flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
  id: 1,
  question: 'What is 2 + 2?',
  answer: '4',
  options: [
    '2',
    '3',
    '52',
    '5',
  ]
  },
    {
      id: 2,
      question: 'What is 2 + 2?',
      answer: 'four',
      options: [
        '2',
        'four',
        '52',
        '5',
      ]
      }
]

export default FlashCardApp;
