
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  const apiUrl = `https://api.edamam.com/doc/open-api/recipe-search-v2.json`
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
