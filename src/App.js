import { useState } from 'react';

import Section from './components/Section';
import Tabs from './components/Tabs';
import TabButton from './components/TabButton';
import Contact from './components/Contact';
import Work from './components/Work';

import me from './images/WorkPORTRAIT-cropped.png';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';

import './App.css';

function App() {
  const [selectedLink, setSelectedLink] = useState();

  function handleSelect(selectedButton) {
    setSelectedLink(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedLink) {
    tabContent = (
      <div id="tab-content">
        <h3>{selectedLink}</h3>
      </div>
    );

    if (selectedLink === 'myWork') {
      tabContent = (
        <Work />
      )
    }

    if (selectedLink === 'contactMe') {
     tabContent = (
      <Contact />
     )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <img className="as-me" src={me} alt="Adam Shortsleeves" />
        <h1>Hi! I'm Adam.</h1>
        <p>I build websites.</p>
      </header>
      <Section className="as-links">


        <Tabs
          activeBtns={selectedLink ? true: false}
          ButtonsContainer="menu"
          buttons={
            <>
              <button className={ selectedLink ? 'as-back' : 'as-back as-back__hidden' } onClick={() => setSelectedLink(undefined)}>Back</button>
              <TabButton
                isSelected={selectedLink === 'myWork'}
                onClick={() => handleSelect('myWork')}
                title={'My Work'}
                image={"folder"}
              />
              <TabButton
                isSelected={selectedLink === 'sideProjects'}
                onClick={() => handleSelect('sideProjects')}
                title={'Side projects'}
                image={"fork"}
              />
              <TabButton
                isSelected={selectedLink === 'contactMe'}
                onClick={() => handleSelect('contactMe')}
                title={'Contact Me'}
                image={"letter"}
              />
              <a href="https://www.linkedin.com/in/adam-shortsleeves/">LinkedIn <img src={linkedin} className='as-icon as-icon__linkedin' alt="linkedin Icon" /></a>
              <a href="https://github.com/ashortsleeves">GitHub <img src={github} className='as-icon as-icon__github' alt="github Icon" /></a>
            </>
          }
        />
      </Section>
      <Section>
        {tabContent}
      </Section>
    </div>
  );
}

export default App;