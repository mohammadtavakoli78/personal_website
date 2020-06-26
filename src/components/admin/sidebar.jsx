import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import getAdminNavLinks from './../../services/adminNavLinks';

class Sidebar extends Component {

    render() { 
        const adminNavLinks = getAdminNavLinks();
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {adminNavLinks.map(
                            i =>
                         <li className="nav-item" key={i.id}>
                                <Link className="nav-link" to={i.link}>
                                    <span className={i.icon} />
                                    <span className="m-2">
                                        {i.text}
                                    </span>
                                </Link>
                                <hr className="shadow" />
                            </li>
                            )}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Sidebar;