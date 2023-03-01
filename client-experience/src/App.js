
import './App.css';
import Navbar from './navbar/Navbar';
import Pages from './pages/Pages';

function App() {
  const apiUrl = `https://api.edamam.com/doc/open-api/recipe-search-v2.json`
  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
