import React, {Component} from 'react';
import headshot from '../assets/headshot.png';
import react from '../assets/react.svg'
import html from '../assets/html.svg'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import xd from '../assets/xd.svg'
import python from '../assets/python.svg'
import django from '../assets/django.svg'


const AboutMe = () => {
    let bio = "I’m a self-taught graphic designer and web developer from Sacramento, CA. My creativity is fueled by coffee and good conversations."
    return(
        <>
            <div class="card">
                <div>
                    <img
                        src={headshot}
                        class="card-img"
                        width="30rem"
                        alt="headshot"
                    />
                </div>
                <div>
                    <h1>About Me</h1>
                    <p>{bio}</p>
                    <h1>Favorite Tools</h1>
                        <p class="subheader">Creative</p>
                            {/* adobe logos */}
                            <div class="icon-container">
                                
                            </div>
                    
                        <p class="subheader">Technical</p>
                            {/* programming logos */}
                            <div class="icon-container">

                            </div>
                </div>
            </div>
        </>
    )
}

class Header extends Component {
    render(){
        return(
            <>
                <div class="jumbo">
                    <div class="header-text-container">
                        <h2>Hey There, I'm</h2>
                        <h1 class="jumbo-text">Noelle Szombathy</h1>
                        <h3>Design Coffee Code Repeat</h3>
                        {/* need to include arrows in between */}
                    </div>
                </div>
                <AboutMe/>
            </>
        )
    }
}

export default Header