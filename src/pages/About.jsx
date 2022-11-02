import React from 'react';
import './Pages.css'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import '../components/Header.css'

const useStyles = makeStyles((theme) => ({
    about: {
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: "black",
    },
}));

export function About() {
  /* About section detailing ASL_Learning information */
    const classes = useStyles();
    return <div className={classes.about}>
        <div className='about'>
        <Header />
        <h1>About Us</h1>
        <p> Welcome, to ASL_Learning </p>
        <br />
        <p>
          ASL_Learning, short for American Sign Language Learning 
          is web app dedicated to
           teaching ASL to users in simple and 
          easy to use way. Through the use of Flashcards and a hands on
          approach, users can learn day by day ASL alphabet letters. 
          Our goal with ASL_Learning is to make the process of learning ASL 
          quick and easy. Currently we count with a flash card system of learning
          but we plan to implement other features like quizes and ASL hand reading
          technology.</p>
      </div>
      </div>
};