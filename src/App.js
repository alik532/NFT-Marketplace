import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/collection/:slug' element={<CollectionPage/>}/>
            <Route exact path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
