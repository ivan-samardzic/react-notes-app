import React from 'react'
import './Header.css'
import Clock from '../Clock/Clock'

const Header = ({heading}) => {
    return (
        <header className="d-flex flex-row justify-content-around align-items-center">
            <h3>{heading}</h3>
            <Clock />
        </header>
    )
}

export default Header
