import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes> 
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/fav' element={<FavouritesPage/>}></Route>
        <Route path='/user/:username' element={<UserPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
