import React from 'react'

import './../Home/styles.css'
import logo from '../../assets/logo.svg'

const Home = () => {
  return(
   <div id="page-home">
    <div className="content">
      <header id="page-home" className="content">
        <img src={logo} alt="Ecoleta"/>
      </header>
    </div>  
   </div>

  )
}

export default Home