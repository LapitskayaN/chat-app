import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact"> 
      <div className="avatar">
          <img  className="avatar" src="https://randomuser.me/api/portraits/women/10.jpg"></img>  
          {/* /// <a href="https://randomuser.me/api/portraits/women/10.jpg">aaa</a>     */}
      </div>
      <div>
        <div className="name">
          <p>Natalia Lapitskaya</p>
        </div>
        <div className="status">
            <div className="status-online "></div> 
            {/* <div className="status-offline "></div>        */}
            <p className="status-text">online</p>
        </div>
      </div>

    </div>
    
  );
}

export default Contact;