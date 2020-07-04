import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../../components/hero/hero'
import Banner from '../../components/banner/banner'

const HomePage = () => {
    return (
      <>
        <Hero>
        <Banner title = "transfer moneny using passmoney app" subtitle="send and receive money instantly with passmoney app and other more transactions at lower rates" >
           <Link className="btn-primary" to='/'>
             Login
           </Link>
        </Banner>
        </Hero>
      </>

    )
}

export default HomePage