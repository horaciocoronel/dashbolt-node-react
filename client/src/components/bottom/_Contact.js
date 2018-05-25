import React from 'react';
import github from '../../assets/images/github.png';

const Contact = (props) => {
    return (
      <div className="bottom">
        <div className="created-by">
          Created by <a href="https://www.linkedin.com/in/horacio-coronel/">Horacio Coronel</a> | <a href="https://github.com/horaciocoronel" title="Horacio Coronel | Github"><img src={github} className="contact-icon" /> Github</a>
        </div>
      </div> 
    )
}

export default Contact;