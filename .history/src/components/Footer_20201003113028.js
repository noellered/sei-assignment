import { waitForElementToBeRemoved } from '@testing-library/react';
import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <>
                <div className="footer-container">
                    <p className="text-white disclaimer">© Created by Noelle Szombathy 2020, All Rights Reserved</p>
                </div>
            </>
        )
    }
}