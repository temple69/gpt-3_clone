import React from 'react'
import classes from './intro.module.css'
import img_1 from '../../images/img_1.png'
import img_2 from '../../images/img_2.png'
import img_3 from '../../images/img_3.png'
import img_4 from '../../images/img_4.png'
import img_5 from '../../images/img_5.png'
import img_6 from '../../images/img_6.png'
import vector from '../../images/vector.png'

const Intro = () => {
  return (
    <section className={classes.intro_con}>
            <div>
                <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <input type="email"  placeholder='Your Email Address' />
                <button>Get Started</button>
                <article>
                    <img src={img_1} alt="img_1" />
                    <img src={img_2} alt="img_2" />
                    <img src={img_3} alt="img_3" />
                    <img src={img_4} alt="img_4" />
                    <img src={img_5} alt="img-5" />
                    <img src={img_6} alt="img_6" />
                    <button>1.6k+</button>
                    <span>1,600 people requested access a visit in last 24 hours</span>
                    </article>
            </div>
            <div>
                <img src={vector} alt="vector" />
            </div>
            </section>
  )
}

export default Intro