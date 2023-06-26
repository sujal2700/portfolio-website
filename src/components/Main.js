import React from 'react';
import './styles/Main.css';
import {GrLinkedin, GrGithub} from 'react-icons/gr';
import {SiGmail} from "react-icons/si";
import {Link} from 'react-router-dom';

const Main =() =>{
    return(
        <div className="main" id="home">
            <div className="main_container">
                <div className="text">
                    <h2><p>HELLO EVERYONE!</p></h2>
                    <h1>
                        I AM SUJAL SINGH
                    </h1>
                    <h4><p>WEB DEVELOPER & APP DEVELOPER</p></h4>
                    <div className='icons'>
                    <Link to="https://www.linkedin.com/in/sujal-singh-b00700230/">    <GrLinkedin className="icon"  /> </Link>
                      <Link to="https://github.com/sujal2700" > <GrGithub className='icon' /> </Link>
                        <Link to ="mailto:singhsujalt@gmail.com"> <SiGmail className='icon' /> </Link>
                    </div>
                    <div className="buttons">
                    <Link to ="mailto:singhsujalt@gmail.com"><button class="button">Hire Me</button> </Link>
                        
                    </div>
                </div>
                
                <div className="main_img">
                </div> </div>
        </div>
    )
}
export default Main