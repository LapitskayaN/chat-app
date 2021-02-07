import React from 'react';
import PropTypes from "prop-types";
import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact"> 
      <div className="avatar">
          <img  className="avatar" src={props.image}></img>  
          {/* /// <a href="https://randomuser.me/api/portraits/women/10.jpg">aaa</a>     */}
      </div>
      <div>        
          <p className="name">{props.name}</p>        
          <div className="status">
          <div className={props.status ? "status-online" : "status-offline"} />
          <p className="status-text">{props.status ? "online" : "offline"}</p>
       
            {/* <p className="status-text">
              <span className="status-online"></span>Online
            </p> */}
          </div>
      </div>

    </div>
    
  );
}
Contact.propTypes = {
  characterFirstName: PropTypes.string.isRequired,
  characterLastName: PropTypes.string.isRequired
};

export default Contact;