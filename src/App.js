import './App.css';
//import ImageMain from './images/desktop/image-hero.jpg'
import Hamburger from './images/icon-hamburger.svg'
import CloseHamburger from './images/icon-close.svg'
import Logo from './images/logo.svg'
import Vr from './images/desktop/image-interactive.jpg'
import VrMobile from './images/mobile/image-interactive.jpg'
import Curiosity from './images/desktop/image-curiosity.jpg'
import CuriosityMobile from './images/mobile/image-curiosity.jpg'
import DeepEarth from './images/desktop/image-deep-earth.jpg'
import DeepEarthMobile from './images/mobile/image-deep-earth.jpg'
import FishEye from './images/desktop/image-fisheye.jpg'
import FishEyeMobile from './images/mobile/image-fisheye.jpg'
import Above from './images/desktop/image-from-above.jpg'
import AboveMobile from './images/mobile/image-from-above.jpg'
import Grid from './images/desktop/image-grid.jpg'
import GridMobile from './images/mobile/image-grid.jpg'
import NightArcade from './images/desktop/image-night-arcade.jpg'
import NightArcadeMobile from './images/mobile/image-night-arcade.jpg'
import Pocket from './images/desktop/image-pocket-borealis.jpg'
import PocketMobile from './images/mobile/image-pocket-borealis.jpg'
import Football from './images/desktop/image-soccer-team.jpg'
import FootballMobile from './images/mobile/image-soccer-team.jpg'
import Facebook from './images/icon-facebook.svg'
import Instagram from './images/icon-instagram.svg'
import Pinterest from './images/icon-pinterest.svg'
import Twitter from './images/icon-twitter.svg'

import { useState } from 'react';

function App() {
  
  const [ burger, setHamburger ] = useState(false)

  const hamburgerActive = () => {
    if (burger === false) {
      setHamburger(true)
      console.log(burger)
    } else {
      setHamburger(false)
      console.log(burger)
    }
  }
  
  return (
    <div className="App">
      <div className="main-container">
          <nav>
            <img src={Logo} alt="#" className={`${burger ? "fixed loopstudio" : ""}`}/>

            <img src={Hamburger} alt="#" id='ham' className={`${burger ? "close" : "open"}`} onClick={hamburgerActive}/>
            <img src={CloseHamburger} alt="#" id='ham' className={`${burger ? "open fixed" : "close"}`} onClick={hamburgerActive}/>
  
            <div className={`menu-items ${burger ? "ham-menu" : "" }`}>
              <p>About</p>
              <p>Carrers</p>
              <p>Events</p>
              <p>Products</p>
              <p>Support</p>
            </div>
          </nav>

          <div className="immersive"><h1>Immersive experiences that deliver</h1></div>
      </div>

      <div className="content">
        <div className="container-middle">
          <div className="vr">
            <div className="vr-image">
              <img src={Vr} alt="#" className='vr-desktop'/>
              <img src={VrMobile} alt="#" className='vr-mobile'/>
            </div>

            <div className="vr-text">
              <h3>The leader in interactive VR</h3>
              <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.</p>
            </div>
          </div>

          <div className="grid">
            <nav>
              <h1>Our creations</h1>
              <button>See all</button>
            </nav>

            <div className="grid-images">
              <div className="grid-image">
                <img src={DeepEarth} alt="#" className="img-desktop"/>
                <img src={DeepEarthMobile} alt="#" className='img-mobile'/>
                <h4>Deep earth</h4>
              </div>
              <div className="grid-image">
                <img src={NightArcade} alt="#" className="img-desktop"/>
                <img src={NightArcadeMobile} alt="#" className='img-mobile'/>
                <h4>Night arcade</h4>
              </div>
              <div className="grid-image">
                <img src={Football} alt="#" className="img-desktop"/>
                <img src={FootballMobile} alt="#" className='img-mobile'/>
                <h4>Soccer team VR</h4>
              </div>
              <div className="grid-image">
                <img src={Grid} alt="#" className="img-desktop"/>
                <img src={GridMobile} alt="#" className='img-mobile'/>
                <h4>The grid</h4>
              </div>
              <div className="grid-image">
                <img src={Above} alt="#" className="img-desktop"/>
                <img src={AboveMobile} alt="#" className='img-mobile'/>
                <h4>From up above VR</h4>
              </div>
              <div className="grid-image">
                <img src={Pocket} alt="#" className="img-desktop"/>
                <img src={PocketMobile} alt="#" className='img-mobile'/>
                <h4>Pocket borealis</h4>
              </div>
              <div className="grid-image">
                <img src={Curiosity} alt="#" className="img-desktop"/>
                <img src={CuriosityMobile} alt="#" className='img-mobile'/>
                <h4>The curiosity</h4>
              </div>
              <div className="grid-image">
                <img src={FishEye} alt="#" className="img-desktop"/>
                <img src={FishEyeMobile} alt="#" className='img-mobile'/>
                <h4>Make it fisheye</h4>
              </div>
            </div>
            
            <button id='see-mobile'>SEE ALL</button>
          </div>
        </div>
      </div>  

      <footer>
        <div className="loop">
          <img src={Logo} alt="#" />

          <div className="menu-items">
            <p>About</p>
            <p>Carrers</p>
            <p>Events</p>
            <p>Products</p>
            <p>Support</p>
          </div>
        </div>

        <div className="socialmedia">
      
          <div className="media">
            <img src={Facebook} alt="#"/>
            <img src={Twitter} alt="#"/>
            <img src={Pinterest} alt="#"/>
            <img src={Instagram} alt="#"/>
          </div>

          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
