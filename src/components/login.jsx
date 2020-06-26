import React, { Component } from 'react';
import {login} from '../services/loginService'
import { toast } from 'react-toastify';
class Login extends Component {
    state = {
        email : '',
        password : ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const {data} = await login(this.state.email, this.state.password);
            localStorage.setItem('token', data);
            this.props.history.replace('/admin');
        }catch(ex){
            if(ex.response && ex.response.status === 400){
                toast.error('ایمیل یا پسورد نادرست است');
            } 
        }
    }

    render() { 
        return (
            <form onSubmit = {this.handleSubmit} className="rtl form-signin border rounded mx-auto bg-light shadow">
                <h1 className="h3 mb-3 text-center">لطفا وارد شوید</h1>
                <label for="inputEmail" className="sr-only">
                    آدرس ایمیل
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="آدرس ایمیل"
                    value = {this.state.email}
                    onChange = {e => this.setState({email : e.target.value})}
                    required
                    autoFocus
                />
                <label for="inputPassword" className="sr-only">
                    کلمه عبور
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="کلمه عبور"
                    value = {this.state.password}
                    onChange = {e => this.setState({password : e.target.value})}
                    required
                />

                <button
                    class="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    ورود
                </button>
            </form>
        );
    }
}
 
export default Login;