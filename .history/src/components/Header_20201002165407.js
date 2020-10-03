import React, {Component} from 'react';

const AboutMe = () => {
    let bio = "I’m a self-taught graphic designer and web developer from Sacramento, CA. My creativity is fueled by coffee and good conversations."
    return(
        <>
            <div>
                <h1>About Me</h1>
                <p>{bio}</p>
                <h2>Favorite Tools</h2>
                    <lead>Creative</lead>
                    {/* adobe logos */}
                    <lead>Technical</lead>
                    {/* coding logos */}
            </div>
            <
        </>
    )
}

class Header extends Component {
    render(){
        return(
            <>
                <h2>Hey There, I'm</h2>
                <h1>Noelle Szombathy</h1>
                <h3>Design Coffee Code Repeat</h3>
                {/* need to include arrows in between */}
            </>
        )
    }
}

export default Header