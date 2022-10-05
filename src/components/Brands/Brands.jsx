import React from 'react'
import classes from './brands.module.css'
import google from '../../images/brands/google.png'
import slack from '../../images/brands/slack.png'
import shopify from '../../images/brands/shopify.png'
import dropbox from '../../images/brands/dropbox.png'
import atlassian from '../../images/brands/atlassian.png'

const Brands = () => {
  return (
    <div className={classes.flex_con}>
                <img src={google} alt="google" />
                <img src={slack} alt="slack" />
                <img src={atlassian} alt="atlassian" />
                <img src={dropbox} alt="dropbox" />
                <img src={shopify} alt="shopify" />

            </div>
  )
}

export default Brands