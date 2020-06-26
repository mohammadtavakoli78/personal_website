import React, { Component } from 'react';
import { paginate } from './../../utils/paginate';
import Pagination from './../pagination';
import {getCourses, deleteCourses} from './../../services/courseService';
import Courses from './../courses';
import { toast } from 'react-toastify';

class AllCourses extends Component {
    state = {  
        courses: [],
        currentPage: 1,
        pageSize: 5
    }

    async componentDidMount() {
        const {data} = await getCourses();
        this.setState({
            courses: data
        })
    }

    handleDelete = async courseId => {
        const orginalState = this.state.courses;
        const courses = this.state.courses.filter(c => c._id!==courseId);
        this.setState({courses});
        try{
            const result = await deleteCourses(courseId);
            if(result.status === 200)
                toast.success('عملیات با موفقیت انجام شد');
        }catch(ex){
            if(ex.response && ex.response.status === 404)
                toast.error('دوره ای با شناسه ارسالی وجود ندارد');

            this.setState({
                courses: orginalState
            })
        }
    }

    getPageData = () => {
        const {pageSize, currentPage, courses: allCourses} = this.state;
        const courses = paginate(allCourses, currentPage, pageSize);
        return {
            totalCount: allCourses.length,
            data: courses
        }
    }

    handleRedirect = (course) => {
        this.props.history.push({
            pathname: '/admin/editCourse',
            course
        })
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        })
    }

    render() {

        const {pageSize, currentPage} = this.state;
        const {totalCount, data} = this.getPageData();
        let count = 1;
        return (
            <div className="bg-light m-3 p-4 border rounded">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان دوره</th>
                            <th>زمان دوره</th>
                            <th>قیمت دوره</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(course => (
                                <tr key={course._id}>
                                    <th scope='row'>{count++}</th>
                                        <td>{course.title}</td>
                                        <td>{course.time}</td>
                                        <td>{course.price}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => (this.handleRedirect(course))}>
                                                ویرایش
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => (this.handleDelete(course._id))}>
                                                حذف
                                            </button>
                                        </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination
                    itemCount= {totalCount}
                    pageSize = {pageSize}
                    currentPage = {currentPage}
                    onPageChange = {this.handlePageChange} 
                />
            </div>
        );
    }
}
 
export default AllCourses;