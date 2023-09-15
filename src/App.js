import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is Amazing"/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup" component={() => <Signup />} />
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
