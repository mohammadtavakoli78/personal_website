import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './/components/navbar'
import Sidebar from './components/sidebar';
import Posts from './components/posts';
import Footer from './components/footer';
import Education from './components/education';
import Skill from './components/skill';
import About from './components/about';
import Courses from './components/courses';
import Contact from './components/contact';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="container-fluid rtl">
      <Navbar />
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Switch>
            <Route path='/courses' component={Courses}/>
            <Route path='/education' component={Education}/>
            <Route path='/skill' component={Skill}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/' exact component={Posts}/>
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </div>    
      <Footer />
    </div>
  );
}

export default App;
