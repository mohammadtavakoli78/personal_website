import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getPostCount} from '../../services/postService';
import {getCourseCount} from '../../services/courseService';


class NavBar extends Component {
    state = {
        postCount: '',
        courseCount: ''
    }

    async componentDidMount() {
        const {data: postCount} = await getPostCount();
        const {data: courseCount} = await getCourseCount();  
        this.setState({
            postCount: postCount.count,
            courseCount: courseCount.count
        })
    }

    render() { 
        const {postCount, courseCount} = this.state;
        return (
            <nav className="rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    وب سایت شخصی
                </a>
                <p className="mt-2" style={{ color: 'white' }}>
                    تعداد پست ها:
                    <span className="badge badge-warning badge-pill m-1">
                        {postCount}
                    </span>
                </p>
                <p className="mt-2" style={{ color: 'white' }}>
                    تعداد دوره ها:
                <span className="badge badge-warning badge-pill m-1">
                        {courseCount}
                </span>
                </p>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/admin/logout">
                            خروج
                        </Link>
                    </li>
                </ul>

            </nav>
        );
    }
}
 
export default NavBar;