import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Link } from 'react-router-dom'
import "./Header.css"

 
const useStyles = makeStyles((theme) => ({

    appbar:{
        fontFamily:"Nunito",
        flexGrow: '1',    
        backgroundColor: "black",
        position:"absolute",
       
    },

    appbarTitle:{
        fontSize: '3rem',
        fontFamily: "Nunito",
        flexGrow: '1',
        color: '#fff',
        textDecoration: 'none',
    },

    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        fontSize: '3rem',
        flexGrow: '1',
        position: 'absolute',

    },

    icon:{
        color: '#fff',
        fontSize: '7rem',
        position: 'absolute'
    }
}));
export default function Header() {
    /** Header function made with Material UI stylings and routes for seperate web pages */
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/" className={classes.appbarTitle}>ASL_Learning</Link>
            <ul className="Navbar">
                <li className="flash">
                    <a className="flashletters" href="/flash">FlashCards</a>
                     <a className="aboutletters" href="/about">About</a>
                     <a className="ALSletters" href="/ASL">What is ASL?</a>
                </li>
            </ul>
            <IconButton>
            </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    );
}