import React from 'react';
import PropTypes from "prop-types";
import './Contact.css';


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    isOnline: false,      
    }
  }
 render() {
   return (
    <div className="Contact"> 
        <div className="avatar">
           <img  className="avatar" src={this.props.image}></img>  
        </div>
       <div>        
          <p className="name">{this.props.name}</p>        
          <div className="status"

            onClick={ event =>{
              const newIsOnline = !this.state.isOnline;
              this.setState({isOnline: newIsOnline});
            }}          
            >
                <div className={this.state.isOnline ? "status-online" : "status-offline"} />
                <p className="status-text">{this.state.isOnline ? "online" : "offline"}</p>                
          </div>
        </div>
     </div>    
   )
 }
}

Contact.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Contact;