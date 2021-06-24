// import './App.css';
import CreateProject from './pages/CreateProject'
import NewProject from './pages/NewProject';
import {Route} from 'react-router-dom';
import Questionaire from './pages/Questionaire';
import BrandingServices from './pages/BrandingServices';

function App() {
  return (
    <div>
      <Route exact path='/create' component={CreateProject} />
      <Route exact path='/newProject' component={NewProject} />
      <Route exact path='/questionaire' component={Questionaire} />
      <Route exact path='/branding' component={BrandingServices} />
    </div>
  );
}

export default App;
