import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './navbar'
import Sidebar from './sidebar';
import CreatePost from './createPost';
import AllPosts from './allPosts';
import CreateCourse from './createCourse';
import AllCourses from './allCourses';
import 'react-toastify/dist/ReactToastify.css'
import EditPost from './editPost';
import EditCourse from './editCourse';
import Logout from './logout';
function Dashboard() {
  return (
    <div className="container-fluid rtl">
      <ToastContainer />
      <Navbar />
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Switch>
            <Route path='/admin/create-post' component={CreatePost}/>
            <Route path='/admin/allposts' component={AllPosts}/>
            <Route path='/admin/create-course' component={CreateCourse}/>
            <Route path='/admin/editpost' component={EditPost}/>
            <Route path='/admin/editCourse' component={EditCourse}/>
            <Route path='/admin/allcourses' component={AllCourses}/>
            <Route path='/admin/logout' component={Logout}/>
          </Switch>
        </main>
      </div>    
    </div>
  );
}

export default Dashboard;
