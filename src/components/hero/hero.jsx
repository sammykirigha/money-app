import React from 'react'
import {Link} from 'react-router-dom'
import './hero.styles.scss';
import Banner from '../banner/banner';


const Hero = () => (
  <>
  <div className="defaulthero"></div>
  <Banner title = "transfer moneny using passmoney app" subtitle="send and receive money instantly with passmoney app and other more transactions at lower rates" >
    <Link className="btn-primary" to='/'>
      Login
    </Link>
  </Banner>
  </>

)

export default Hero