import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';

import { Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Specialities from './components/Specialities';
import Contact from './components/Contact';
import Show from './components/Show';
import Reservation from './components/Reservation';
import Register from './components/Register';
import Login from './components/Login';
import MenuRestaurant from './components/MenuRestaurant';
import BottomAppBar from './components/BottomAppBar';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main">
      <div className='app'>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link to={'/'}>
            <MenuItem onClick={handleClose}>Accueil</MenuItem>
          </Link>
          <Link to={'/restaurant'}>
            <MenuItem onClick={handleClose}>Restaurant</MenuItem>
          </Link>
          <Link to={'/specialities'}>
            <MenuItem onClick={handleClose}>Spécialité</MenuItem>
          </Link>
          <Link to={'/menu/restaurant'}>
            <MenuItem onClick={handleClose}>Notre carte</MenuItem>
          </Link>
          <Link to={'/reservation'}>
            <MenuItem onClick={handleClose}>Réserver une table</MenuItem>
          </Link>
          <Divider />
          <Link to={'/login'}>
            <MenuItem onClick={handleClose}>Se connecter</MenuItem>
          </Link>
          <Link to={'/register'}>
            <MenuItem onClick={handleClose}>Créer un compte</MenuItem>
          </Link>
          <Divider />
          <Link to={'/contact'}>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
        </Menu>

        <BottomAppBar />

        <Routes>
          <Route
            exact path='/'
            element={
              <Home />
            }
          >
          </Route>
          <Route
            exact path='/restaurant'
            element={
              <Restaurant />
            }
          >
          </Route>
          <Route
            exact path='/specialities'
            element={
              <Specialities />
            }
          >
          </Route>
          <Route
            exact path='/menu/restaurant'
            element={
              <MenuRestaurant />
            }
          >
          </Route>
          <Route
            exact path='/contact'
            element={
              <Contact />
            }
          >
          </Route>
          <Route
            exact path='/show'
            element={
            <Show />
          }
          >
          </Route>
          <Route
            exact path='/reservation'
            element={
              <Reservation />
            }
          >
          </Route>
          <Route
            exact path='/login'
            element={
              <Login />
            }
          >
          </Route>
          <Route
            exact path='/register'
            element={
              <Register />
            }
          >
          </Route>
        </Routes>
      </div>
    </div>
  );
}
