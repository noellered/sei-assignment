import React, {Component} from 'react';
import headshot from '../assets/headshot.png';
import react from '../assets/react.svg';
import html from '../assets/html.svg';
import photoshop from '../assets/photoshop.svg';
import illustrator from '../assets/illustrator.svg';
import indesign from '../assets/indesign.svg';
import xd from '../assets/xd.svg';
import python from '../assets/python.svg';
import django from '../assets/django.svg';
import javascript from '../assets/javascript.svg';
import phoneicon from '../assets/phone.svg';
import emailicon from '../assets/email.svg';
import githubicon from '../assets/github.svg';


const AboutMe = () => {
    let bio = "I’m a self-taught graphic designer and web developer from Sacramento, CA. My creativity is fueled by coffee and good conversations."
    return(
        <>
            <div className="card aboutme">
                <div className="headshot">
                    <img
                        src={headshot}
                        className="card-img"
                        width="30rem"
                        alt="headshot"
                    />
                </div>
                <div className="bio">
                    <h1>About Me</h1>
                    <p>{bio}</p>
                    <h1>Favorite Tools</h1>
                        <p className="subheader">Creative</p>
                            {/* adobe logos */}
                            <div className="icon-container">
                                <img src={photoshop} className="icon" alt="photoshop logo"/>
                                <img src={illustrator} className="icon" alt="illustrator logo"/>
                                <img src={indesign} className="icon" alt="indesign logo"/>
                                <img src={xd} className="icon" alt="xd logo"/>
                            </div>
                    
                        <p className="subheader">Technical</p>
                            {/* programming logos */}
                            <div className="icon-container technical-tools">
                                <img src={html} className="icon" alt="html logo"/>
                                <img src={python} className="icon" alt="python logo"/>
                                <img src={javascript} className="icon" alt="javascript logo"/>
                                <img src={react} className="icon" alt="react logo"/>
                                <img src={django} className="icon" alt="django logo"/>
                            </div>
                </div>
            </div>
        </>
    )
}

const Contact = () => {
    let phone = "916-871-8335"
    let email = "nszombathy@gmail.com"
    let github = "noellered"

    return(
        <>
            <div className="card">
                <div className="contact-container">
                <h1>Get in touch!</h1>
                <div className="contact-info">
                    <img src={phoneicon} className="icon-small" alt="phone icon"/>
                    <p className="contact-text">{phone}</p>
                    <br/>
                    <img src={emailicon} className="icon-small" alt="email icon"/>
                    <p className="contact-text">{email}</p>
                    <br/>
                    <img src={githubicon} className="icon-small" alt="github icon"/>
                    <p className="contact-text">{github}</p>
                </div>
                </div>
            </div>
        </>
    )
}

const Hobbies = () => {
    return(
        <>
            <img src={illo} alt="illustration">
        </>
    )
}

class Body extends Component {
    render(){
        return(
            <>
                <div className="jumbo">
                    <div className="header-text-container">
                        <h2>Hey There, I'm</h2>
                        <h1 className="jumbo-text">Noelle Szombathy</h1>
                        <h3>Design, Code, Coffee, Repeat.</h3>
                    </div>
                </div>
                <AboutMe/>
                <Contact/>
            </>
        )
    }
}

export default Body