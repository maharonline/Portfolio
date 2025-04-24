// import React from 'react'
// import Profile from '../../assets/home.png'
// import { Link } from 'react-router-dom'
// import { FaArrowRight } from 'react-icons/fa'
// import "./Home.css"



// export default function Home() {
//   return (
//     <>
//     <section className="home section grid">
//       <img src={Profile} alt="" className='home_img' />

//       <div className="home_content">
//         <div className="home_data">
//           <h1 className='home_title'>
//             <span>I'm Hamza Ahmad.</span> <br />Web Designer
//             </h1>
//           <p className="home_description">
//           Hi, I'm a MERN Stack developer passionate about building responsive, user-friendly web applications. I specialize in creating seamless front-end experiences and robust back-end solutions.          </p>
//           <Link to='/about' className='button'>More About Me<span className='button_icon'><FaArrowRight/></span></Link>
//         </div>
//       </div>
//       <div className="color_block"></div>
//     </section>

//     </>
//   )
// }

import React, { useState, useEffect } from 'react'
import Profile from '../../assets/home.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./Home.css"

export default function Home() {
  const roles = ["Web Designer", "React Native Developer", "MERN Stack Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = roles[textIndex];
    
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, roles]);

  return (
    <>
      <section className="home section grid">
        <img src={Profile} alt="" className='home_img' />

        <div className="home_content">
          <div className="home_data">
            <h1 className='home_title'>
              <span>I'm Hamza Ahmad.</span><br />
              <span className="typewriter">{displayedText}<span className='blinking-cursor'>|</span></span>
            </h1>
            <p className="home_description">
              Hi, I'm a MERN Stack developer passionate about building responsive, user-friendly web applications. I specialize in creating seamless front-end experiences and robust back-end solutions.
            </p>
            <Link to='/about' className='button'>
              More About Me<span className='button_icon'><FaArrowRight /></span>
            </Link>
          </div>
        </div>
        <div className="color_block"></div>
      </section>
    </>
  )
}
