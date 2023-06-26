import React from "react";
import './styles/Section.css';

const Section =()=>{
    return(
      <div className="sections" id="about">
        <br></br>
       <center> <h1>ABOUT ME</h1> </center>
         <div className="section_container">
           <div className="section_content">
            <p>A STUDENT PURSUING BTECH CSE  <br/>
            A LEARNER <br />
            A WEB AND APP DEVELOPMENT ENTHUSIAST SKILLED IN </p> <br /> 
             <ul className="skills">
             <li>MERN Stack</li>
             <li>JAVA</li>
             <li>PHP</li>
             <li>React-Native</li>
             <li>DATABASES</li>
             </ul>
           </div>
         </div>

      </div>


    )
}
export default Section;