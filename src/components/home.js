import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = ()=> {
  const typedref=useRef(null)
  useEffect(() => {
    const option={
      strings: ["Welcome to my potfolio","My Name is Rizwan Shahani","I'm Full Stack Web Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
  const typed= new Typed(typedref.current, option)
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container-home"id='home'>
        <div className="right"data-aos="fade-up-right"data-aos-duration="1000">
       
            <h1>Rizwan Shahani</h1>
            <p ref={typedref}></p>
            
        </div>

        <div className="left"data-aos="fade-up-left"data-aos-duration="1000">
            <img src="my.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
