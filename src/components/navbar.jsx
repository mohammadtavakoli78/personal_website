import React from 'react';
import SearchBar from './searchBar';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                وب سایت شخصی
            </a>
            <SearchBar />
        </nav>
    );
}
 
export default Navbar;