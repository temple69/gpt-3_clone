import React from 'react'
import classes from './layout.module.css'

const Layout = ({ children }) => {
    return ( 
        <main className={classes.main}>
        {children}

        </main>
    )
}

export default Layout