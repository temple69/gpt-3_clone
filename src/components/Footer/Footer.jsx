import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
    return ( 
        <footer >
            <article>
                <h3>Do you want to step in to the future before others</h3>
                <p>Request Early Access</p>
            </article>
            <section className={classes.footer_grid}>
                <ul>
                    <h4>GPT-3</h4>
                    <li>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</li>
                </ul>
                <ul>
                    <h4>Links</h4>
                    <li><a href="#">Overons</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Counters</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <h4>Company</h4>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <h4>Get in Touch</h4>
                    <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li><a href="#">085-132567</a></li>
                    <li><a href="#">info@payme.net</a></li>
                </ul>
            </section>
            <div className={classes.footer_flex}>
                <p>&copy;2021 GPT-3. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer