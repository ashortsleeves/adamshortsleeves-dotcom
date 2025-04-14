import { useState } from 'react';

import Section from './components/Section';
import Tabs from './components/Tabs';
import TabButton from './components/TabButton';
import Contact from './components/Contact';

import folder from './icons/folder.svg';
import fork from './icons/fork.svg';
import letter from './icons/letter.svg';
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

    if (selectedLink === 'contactMe') {
     tabContent = (
      <Contact />
     )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi! I'm Adam.</h1>
        <p>I build websites.</p>
      </header>
      <Section className="as-links">
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
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
              <li><a href="https://www.linkedin.com/in/adam-shortsleeves/">LinkedIn <img src={linkedin} className='as-icon as-icon__linkedin' alt="linkedin Icon" /></a></li>
              <li><a href="https://github.com/ashortsleeves">GitHub <img src={github} className='as-icon as-icon__github' alt="github Icon" /></a></li>
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