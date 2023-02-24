import './App.css';
import { useSelector } from 'react-redux';
import { selectAllCollections, selectCollectionsStatus } from './reducers/CollectionsReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollections } from './reducers/CollectionsReducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  const dispatch = useDispatch()
  const status = useSelector(selectCollectionsStatus)

  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchCollections())
  }, [dispatch, status])

  const collections = useSelector(selectAllCollections)
  console.log(collections)

  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={Home}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
