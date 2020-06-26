import React,{Component} from 'react';
import getNavLinks from './../services/navLinks';
import UserInfo from './common/userInfo';
import {Link} from 'react-router-dom';
import {getCourseCount} from '../services/courseService';
class Sidebar extends Component {

    state = {
        count: ''
    }

    async componentDidMount() {
        const {data} = await getCourseCount();
        this.setState({
            count: data.count
        })
    };

    render() { 
        const navLinks = getNavLinks();
        const count = this.state.count
        console.log(count);
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <UserInfo 
                        imgUrl="https://via.placeholder.com/200x200"
                        fullname="محمد توکلی"
                        text="برنامه نویس"/>
                    <hr className="shadow"/>
                    <ul className="nav flex-column">
                        {navLinks.map(
                            i =>
                            <li className="nav-item" key={i.id}>
                                <Link className="nav-link" to={i.link}>
                                    <span className={i.icon} />
                                    <span className="m-2">
                                        {i.text}
                                    </span>
                                    {i.count ? (
                                        <span className="badge-danger badge-pill">
                                            {count}
                                        </span>
                                    ) : null} 
                                </Link>
                            </li>
                            )}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Sidebar;