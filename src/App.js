import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Navbar} from 'reactstrap'
import ProjectedStarters from './components/projectedStarters';
import LoginButton from './components/auth/login-button';
import LogoutButton from './components/auth/logout-button';

function App() {
  return (
    <div className="App">
      <Navbar><LoginButton></LoginButton><LogoutButton></LogoutButton></Navbar>

      <div className="container">
        <ProjectedStarters></ProjectedStarters>
      </div>
    </div>
  );
}

export default App;
