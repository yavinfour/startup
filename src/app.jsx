import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Plan } from './plan/plan';
import { Favs } from './favs/favs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='body bg-dark text-light'>Elements Here</div>
  </BrowserRouter>
);

export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Let's Talk Travel <sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
                <div>
              <li className='nav-item'>
                <NavLink className='nav-link' to='index.html'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='plan.html'>
                  Plan
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='favs.html'>
                  Favs
                </NavLink>
              </li>
              </div>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/plan' element={<Plan userName={userName} />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Mali Allen</span>
            <NavLink className='text-reset' to="https://github.com/yavinfour/startup">
            GitHub
            </NavLink>
          </div>
        </footer>
      </div>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }