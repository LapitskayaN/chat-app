//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact
        name="Ralph Wiggum"
        image="https://randomuser.me/api/portraits/men/85.jpg"
        status="online"
       
      />
      <Contact
        name="Peter Palmer"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        
      />
      <Contact
        name="Yan Mihal"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        status="online"
        
      />
      <ContactList />


    </div>
  );
}

export default App;
