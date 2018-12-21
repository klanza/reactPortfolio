import React, { Component } from 'react';

import Contact from '../Contact';
import Projects from '../Projects';


class MainPage extends Component {

    render() {
        return(
            <div>
                <div>Large body of information for housing various other parts of application</div>
                <div>Needs to be able to take in state for contact form and other information</div>
                <Contact />
                <Projects />
            </div>
        );
    }
}

export default MainPage;