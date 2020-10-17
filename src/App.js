import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';

function App() {

  const [currentTab, setCurrentTab] = useState('Home')

  function renderTab() {
    switch (currentTab) {
      case 'About':
        return <About/>
      case 'Portfolio' :
        return <Portfolio/>
      case 'Resume': 
        return <Resume/>
      case 'Contact': 
        return <ContactForm/> 
      default: 
        return <About/>
    }
  }

  return (
    <div className="container">
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      <div>{renderTab(currentTab)}</div>
      <main>

      </main>
    </div>
  );
}

export default App;