import React from "react";
import './Nav.scss'
import {  NavLink } from "react-router-dom";
export default class Nav extends React.Component {

    render() {

        return(

           
            <div className="topnav">

                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/users" activeClassName="active">Users</NavLink>
                    
            </div>
        )
    }
}