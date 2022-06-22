import React from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial", 
};

const myulstyle = {
    display: "flex", 
    listStyleType: "none",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
}

const headers = <header style={mystyle}> <nav> <ul style={myulstyle}> <li> HOME </li><li>CONTACT</li > <li> PROJECTS </li><li> KIKOO </li><li> HELLO </li></ul></nav></header>

export {mystyle, headers}