import React from 'react';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Library = React.lazy(() => import('./components/Library'));
const MovieInfo = React.lazy(() => import('./components/MovieInfo'));

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route element={<Layout />} path={'/'}>
          <Route element={<Main />} index />
          <Route
            element={
              <React.Suspense>
                <Library />
              </React.Suspense>
            }
            path={'library'}
          />
          <Route
            element={
              <React.Suspense>
                <MovieInfo />
              </React.Suspense>
            }
            path={'movie/:movieId'}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
