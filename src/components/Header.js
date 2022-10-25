import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Menu, Toolbar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import "./Header.css"
 
const useStyles = makeStyles((theme) => ({
    appbar:{
        background:"none",
        fontFamily:"Nunito",
        flexGrow: '1'
        
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
        position: 'absolute'
    },

    icon:{
        color: '#fff',
        fontSize: '7rem',
    }
}));
export default function Header() {
    const classes = useStyles();
    return (<div>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <Link to="/" className={classes.appbarTitle}>ASL_Learning</Link>
            <ul className="Navbar">
                <li className="flash">
                    <a className="flashletters" href="/flash">FlashCards</a>
                     <a className="aboutletters" href="/about">About</a>
                     <a className="contactletters">Contact Us</a>
                </li>
            </ul>
            <IconButton>
       
                
            </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    );
}




/*          <SortIcon></SortIcon >
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                            )
                        })}
                        
                    </ul> */
                