import React from 'react';
import './styles/contact.css';
import {Link} from 'react-router-dom';
const Contact = () =>{
    return(
      <div className="contact" id="contact">
<center> <br />
        <h1>CONTACT ME</h1>

        <h2>Mail me at : <Link to= "mailto:singhsujalt@gmail.com" target="_blank">singhsujalt@gmail.com </Link></h2>
</center>

      </div>


    )

}
export default Contact