import React from "react"
import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
        <nav style={{display: "flex"}}>
            <ul style={{}}>
                <li>
                    <NavLink to="/" style={getStyle}>
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={getStyle}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/error" style={getStyle}>
                        Error
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

const getStyle = ({isActive}: { isActive: boolean }) => {
    return isActive
        ? {color: "green"}
        : {color: "red"}
}

