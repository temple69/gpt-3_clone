import React from 'react'
import classes from './about.module.css'

const About = () => {
  return (
    <section className={classes.about}>
        <div>
            <h3>What is GPT-3</h3>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div>
            <h1>The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
        </div>
        <div className={classes.grid}>
            <article>
                <h3>Chatbots</h3>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
            </article>
            <article>
                <h3>Knowledgebase</h3>
                <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
            </article>
            <article>
                <h3>Education</h3>
                <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
            </article>
            </div>
    </section>
  )
}

export default About