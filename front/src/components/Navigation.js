import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div>
            <div style={{left:"41%",top:"5%",position:"absolute"}}>
                <NavLink to="/">Home</NavLink>
            </div>
            <div style={{left:"51%",top:"5%",position:"absolute"}}>
                <NavLink to="/Sign_in">Sign In</NavLink>
            </div>
            <div style={{left:"61%",top:"5%",position:"absolute"}}>
                <NavLink to="/Sign_up">Sign Up</NavLink>
            </div>
        </div>
    );
}
 
export default Navigation;