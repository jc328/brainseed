import React from 'react';
import 'antd/dist/antd.css'
import Particles from 'react-particles-js';
import '../styles/landingbody.css';


function LandingBody() {
    return (
        <>
          <div className="landingbody_container">
          <div className="landingbody_title">The World's Smartest Flashcards</div>
          <div className="landing_particles">
          <Particles
            style={{height:"100%" , width: "100%"}}
            params={{
              "fps_limit": 28,
              "particles": {
                  "collisions": {
                      "enable": false
                  },
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": false
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "distance": 30,
                      "opacity": 0.4
                  },
                  "move": {
                      "speed": .5
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "opacity_min": 0.05,
                          "speed": 1,
                          "sync": false
                      },
                      "value": 0.4
                  }
              },
              "polygon": {
                  "enable": true,
                  "scale": 0.5,
                  "type": "inline",
                  "move": {
                      "radius": 10
                  },
                  "url": "/deer.svg",
                  "inline": {
                      "arrangement": "equidistant"
                  },
                  "draw": {
                      "enable": true,
                      "stroke": {
                          "color": "rgba(255, 255, 255, .2)"
                      }
                  }
              },
              "retina_detect": false,
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      },
                      resize: true,
                  },
                  "modes": {
                      "bubble": {
                          "size": 6,
                          "distance": 40
                      }
                  }
              }
          }} />
        </div>
      </div>
        </>
    );
}
export default LandingBody;
