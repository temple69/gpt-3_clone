import classes from './register.module.css'
import feature from '../../images/illustration.png'

const Register = () => {
  return (
    <section className={classes.grid_con}>
        <div>
            <article>
                <img src={feature} alt="feature_image" />
            </article>
            <article>
                <span>Request Early Access to Get Started</span>
                <h2>The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p>Request Early Access to Get Started</p>
            </article>
        </div>
        <div>
            <article>
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </article>
            <h2>Get Started</h2>
        </div>
    </section>
  )
}

export default Register