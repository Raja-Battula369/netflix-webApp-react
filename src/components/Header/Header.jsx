import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../.././logo1.png';
import  {GoSearch} from 'react-icons/go';
const Header = () => {
  return (
    <nav className="header">
        <Link to='/'><img height ='100' src= {logo} alt='logo'/></Link>
        <div>
            <Link to='/tvshows'>Tv Shows</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/recent'>Recent</Link>
            <Link to='/mylist'>My List </Link>
        </div>

        <GoSearch/>
    </nav>
  )
}

export default Header
