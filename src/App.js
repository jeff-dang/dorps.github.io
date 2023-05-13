import logo from './logo.svg';
import gif from './images/adventure-time-gunter.gif'
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav color ="cyan" />
      <Header color="cyan" />
      <About color="cyan" />
      <Projects color="cyan" />
      <header className="App-header">
        {/* <img src={gif} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;