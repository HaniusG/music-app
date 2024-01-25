import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const MainPage = lazy(() => import('../../pages/MainPage'));




function App() {

  //I added browser router even though I have one page
  return (
    <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </Suspense>
  );
}

export default App;
