import React, { Component } from 'react';
import {createCourse} from '../../services/courseService';
import { toast } from 'react-toastify';
class CreateCourse extends Component {
    state = {
        title: '',
        time: '',
        price: '',
        imageUrl: ''
    }

    handleSubmit =  async e => {
        e.preventDefault();

        try{
            const result = await createCourse(JSON.parse(JSON.stringify(this.state)));
            if(result.status === 200)
                toast.success('دوره جدید با موفقیت ساخته شد');

        }catch(ex){
            if(ex.response && ex.response.status === 400)
                toast.error('لطفا تمامی موارد را پرکنید');
        }
    }

    render() { 
        return (
            <form
            onSubmit={this.handleSubmit}
            className="form-group bg-light border rounded m-2 shadow p-5"
            >
                <label className="col-md-4 control-label m-2" for="txtTitle">
                    عنوان دوره
                </label>
                <input
                    id="txtTitle"
                    name="textinput"
                    type="text"
                    placeholder="عنوان دوره"
                    className="form-control input-md m-2"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCourseTime"
                >
                    زمان دوره
                </label>
                <input
                    id="txtCourseTime"
                    name="textinput"
                    type="text"
                    placeholder="ثانیه:دقیقه:ساعت"
                    className="form-control w-25 m-2"
                    value={this.state.time}
                    onChange={e => this.setState({ time: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCoursePrice"
                >
                    قیمت دوره
                </label>
                <input
                    id="txtCoursePrice"
                    name="textinput"
                    type="text"
                    placeholder="قیمت به تومان"
                    className="form-control w-25 m-2"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="textinput"
                    type="text"
                    placeholder="لینک عکس"
                    className="form-control m-2"
                    value={this.state.imageUrl}
                    onChange={e => this.setState({ imageUrl: e.target.value })}
                />

                <button className="btn btn-success m-5">ساخت دوره جدید</button>
            </form>
        );
    }
}
 
export default CreateCourse;