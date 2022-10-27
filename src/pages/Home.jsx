import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, } from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  middle: {
    display:"flex",
    justifyContent:'center',
    alignItems: "center",
    height:"100vh",
    color: "white",
    fontFamily:"Nunito",
    fontSize:"4.5rem",
  },
}));
export function Home() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    </div>
}