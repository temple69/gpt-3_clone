import React from 'react'
import classes from './blog.module.css'
import first from '../../images/blog_images/first.png'
import second from '../../images/blog_images/second.png'
import third from '../../images/blog_images/third.png'
import fourth from '../../images/blog_images/fourth.png'
import fifth from '../../images/blog_images/fifth.png'

const Blog = () => {
  return (
    <section >
        <h2 className={classes.heading2}>A lot is happening, 
We are blogging about it.</h2>
        <div className={classes.blog_grid}>
        <figure>
            <img src={first} alt="first" />
            <figcaption>
                <span>Sep 26 2021</span>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </figcaption>
        </figure>
        <figure>
            <img src={second} alt="first" />
            <figcaption>
                <span>Sep 26 2021</span>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </figcaption>
        </figure>
        <figure>
            <img src={third} alt="second" />
            <figcaption>
                <span>Sep 26 2021</span>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </figcaption>
        </figure>
        <figure>
            <img src={fourth} alt="third" />
            <figcaption>
                <span>Sep 26 2021</span>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </figcaption>
        </figure>
        <figure>
            <img src={fifth} alt="first" />
            <figcaption>
                <span>Sep 26 2021</span>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </figcaption>
        </figure>
        </div>
    </section>
  )
}

export default Blog