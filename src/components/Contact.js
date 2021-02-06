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
          <p className="name">Georgia Morris</p>        
          <div className="status">
            <p className="status-text">
              <span className="status-online"></span>Online
            </p>
          </div>
      </div>

    </div>
    
  );
}

export default Contact;