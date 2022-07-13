import Navbar from './navbar'
import HomePage from './Home' 
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from './create';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
