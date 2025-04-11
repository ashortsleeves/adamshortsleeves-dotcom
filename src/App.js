import folder from './icons/folder.svg';
import fork from './icons/fork.svg';
import letter from './icons/letter.svg';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi! I'm Adam.</h1>
        <p>I build websites.</p>
        <ul class="as-links">
          <li><a href="#">My Work <img src={folder} className='as-icon as-icon__folder' alt="folder Icon" /></a></li>
          <li><a href="#">Side Projects <img src={fork} className='as-icon as-icon__fork' alt="fork Icon" /></a></li>
          <li><a href="#">Contact Me <img src={letter} className='as-icon as-icon__contact' alt="letter Icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/adam-shortsleeves/">LinkedIn <img src={linkedin} className='as-icon as-icon__linkedin' alt="linkedin Icon" /></a></li>
          <li><a href="https://github.com/ashortsleeves">GitHub <img src={github} className='as-icon as-icon__github' alt="github Icon" /></a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;