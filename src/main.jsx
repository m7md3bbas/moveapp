import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import MovieList from './components/Movie/MovieList.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import store from './reduxtoolkit/store.js';
import User from './components/User/user.jsx';
import { Provider } from 'react-redux';

import TvShowList from '../src/components/TvShow/TvShowList.jsx'
import ActorList from './components/Actor/ActorList.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path='/tvShowes' element={<TvShowList />} />
        <Route path='/actros' element={<ActorList />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
