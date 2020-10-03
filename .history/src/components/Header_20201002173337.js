import React, {Component} from 'react';
import headshot from '../assets/headshot.png'

const AboutMe = () => {
    let bio = "I’m a self-taught graphic designer and web developer from Sacramento, CA. My creativity is fueled by coffee and good conversations."
    return(
        <>
            <div class="card">
                <div>
                    <img
                        src={headshot}
                        class="card-img"
                        height
                        alt="headshot"
                    />
                </div>
                <div>
                    <h1>About Me</h1>
                    <p>{bio}</p>
                    <h2>Favorite Tools</h2>
                        <lead>Creative</lead>
                        {/* adobe logos */}
                        <lead>Technical</lead>
                        {/* coding logos */}
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