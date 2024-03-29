<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSearchValAction } from '../store/notesReducer';

const Navbar = () => {

    const searchVal = useSelector(state => state.notes.searchVal)
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <NavLink to='/' className="navbar-brand">Note App</NavLink>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink to='/' className="nav-link">Main <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='done' className="nav-link">Done</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='buy' className="nav-link">Buy</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <input type="text" placeholder={"поиск по заметкам"} className="form-control-sm border light col-sm-8"
                        onChange={(e) => dispatch(setSearchValAction(e.target.value))}/>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
=======
import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Note App
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/about"
        >
          Информация
        </NavLink>
      </li>
        <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/done"
        >
          Выполненные
        </NavLink>
      </li>
    </ul>
  </nav>
)
>>>>>>> refs/remotes/origin/master
