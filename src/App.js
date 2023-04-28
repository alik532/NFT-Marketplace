import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import { database } from './firebase-config';

function App() {

  console.log(database)

  return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/collection/:slug' element={<CollectionPage/>}/>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path='/login' element={<LoginPage/>}></Route>
            <Route exact path='/register' element={<RegisterPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
