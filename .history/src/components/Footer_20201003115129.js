import { waitForElementToBeRemoved } from '@testing-library/react';
import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <>
                <div className="footer-container">
                    <p className="footer-text">Created by Noelle Szombathy 2020 <br/> All Rights Reserved</p>
                </div>
            </>
        )
    }
}

export default Footer;