
import './App.css';
import InfoGeneral from './components/InfoGeneral';
import EduExperience from './components/EduExperience';
import PracExperience from './components/PracExperience';
import Contacts from './components/Contacts';
import Awards from './components/Awards';


function App() {
  return (
    <div className="App">
      <Contacts />
      <div className='info'>
         <InfoGeneral />
         <EduExperience />
         <PracExperience />
         <Awards />
      </div>
      
    </div>
  );
}

export default App;
